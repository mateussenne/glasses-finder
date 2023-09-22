import { Grid, Button, Center, FileButton, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useState, useMemo, useRef, useEffect } from "react";
import { UseRequestCreate } from "~/server/api/hooks/use-request-create";
import { convertToBase64 } from "~/utils/convert-to-base64";

interface FileForm {
  file: File | null;
  base64Image: string;
}

export const FileUploadSection = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState("");
  const {
    mutate: saveRequest,
    data: generatedRequest,
    isLoading,
  } = UseRequestCreate();
  const form = useForm<FileForm>({
    initialValues: {
      file: null,
      base64Image: "",
    },
  });

  const activateWebcam = () => {
    setWebCamStatus(true);
  };

  const getVideo = () => {
    if (webCamStatus) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 800, height: 600 },
        })
        .then((stream) => {
          const video = videoRef.current;
          if (!video) {
            return console.log("no video signal");
          }
          video.srcObject = stream;
          video
            .play()
            .then((playing) => {
              console.log(playing);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log("error", e);
        });
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const photo = photoRef.current;

    if (video) {
      const ctx = photo?.getContext("2d");
      ctx?.drawImage(video, 0, 0, width, height);
      setCameraPhoto(true);
      photo?.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "photosnap.jpg");
          setFile(file);
          console.log(file);
        }
      });
    }
  };

  useMemo(() => {
    if (form.values.file) {
      setFile(form.values.file);
    }

    async function loadFile() {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await convertToBase64(formData);
        if (response) {
          setBase64Image(response.base64img);
        }

        if (generatedRequest) {
          localStorage.setItem("requestId", generatedRequest?.id);
          await router.push({
            pathname: "/",
            query: { requestId: generatedRequest.id },
          });
        }
      }
    }
    //  eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadFile();
  }, [file, form.values.file, generatedRequest, router]);

  const transformedValues = useMemo(() => {
    return {
      ...form.values,
      base64Image,
    };
  }, [form, base64Image]);

  const width = 800;
  const height = 600;
  const [webCamStatus, setWebCamStatus] = useState(false);
  const [cameraPhoto, setCameraPhoto] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    getVideo();
  }),
    [videoRef];

  return (
    <>
      <Grid grow>
        {webCamStatus ? (
          <Grid.Col span={12}>
            <canvas
              className={!cameraPhoto ? "hidden" : ""}
              width={width}
              height={height}
              ref={photoRef}
            ></canvas>
            <video
              className={cameraPhoto ? "hidden" : ""}
              ref={videoRef}
            ></video>
            {!file && (
              <Center>
                <Button
                  className="bg-[#AA1155] text-white no-underline transition hover:bg-gradient-to-r hover:from-[#AA1155] hover:to-[#E9207B]  hover:text-white"
                  variant="outline"
                  radius={"xl"}
                  color="pink"
                  size="xl"
                  w={"100%"}
                  mt={15}
                  onClick={takePhoto}
                >
                  Take photo!
                </Button>
              </Center>
            )}
          </Grid.Col>
        ) : (
          <>
            <Grid.Col span={12}>
              <Title className=" bg-gradient-to-r from-[#70DBFF] to-[#AA1155] bg-clip-text text-center text-9xl font-extrabold text-transparent">
                Glasses Finder
              </Title>
            </Grid.Col>
            <Grid.Col span={6}>
              <form>
                <FileButton
                  accept="image/png,image/jpeg"
                  {...form.getInputProps("file")}
                >
                  {(props) => (
                    <Button
                      className="float-right from-[#AA1155] to-[#E9207B] no-underline transition hover:bg-gradient-to-r  hover:text-white"
                      variant="outline"
                      radius={"xl"}
                      color="pink"
                      size="lg"
                      {...props}
                    >
                      Upload image
                    </Button>
                  )}
                </FileButton>
              </form>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button
                className="float-left from-[#AA1155] to-[#E9207B] no-underline transition hover:bg-gradient-to-r hover:text-white"
                variant="outline"
                radius={"xl"}
                color="pink"
                size="lg"
                onClick={activateWebcam}
              >
                Use camera
              </Button>
            </Grid.Col>
          </>
        )}
      </Grid>
      <Grid>
        <Grid.Col span={12}>
          <form onSubmit={form.onSubmit(() => saveRequest(transformedValues))}>
            <Center>
              <Button
                className="bg-[#AA1155] no-underline transition hover:bg-gradient-to-r hover:from-[#AA1155] hover:to-[#E9207B]"
                w={"35%"}
                m={15}
                variant="filled"
                color="pink"
                type="submit"
                radius={"xl"}
                size={"lg"}
                loading={isLoading}
                disabled={file ? false : true}
              >
                Send!
              </Button>
            </Center>
          </form>
        </Grid.Col>
      </Grid>
    </>
  );
};
