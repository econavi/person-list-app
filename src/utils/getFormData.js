const getFormData = (form) => {
  const formFields = [ ...form.elements ]

  const values = formFields.reduce((acc, elem) => {
    if (!elem) return acc
    return {
      ...acc,
      [elem.name]: elem.value
    }
  }, {})

  return values
}

export default getFormData
