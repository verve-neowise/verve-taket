export const mapFormData = (formData: FormData) => {

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    return data
}

export const mapFormDataToArray = (formData: FormData) => {

  const data = []

  for (let field of formData) {
    const [key, value] = field
    const map = new Map<string, string>()
    map[key] = value
    data.push(map)
  }

  return data
}