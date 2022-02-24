export const mapFormData = (formData: FormData) => {

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    return data
}