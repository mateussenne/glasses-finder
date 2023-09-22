type ConverterResponse = {
  base64img: string;
};

export const convertToBase64 = async (formData: FormData) => {
  try {
    const converterResponse = await fetch("/api/uploads/base64-converter", {
      method: "POST",
      body: formData,
    });

    const { base64img } = (await converterResponse.json()) as ConverterResponse;
    return { base64img };
  } catch (e) {
    console.log(e);
  }
};
