import * as yup from "yup"

const todoSchema = yup.object().shape({
    title: yup.string().required("title is required to add task")
})


const setSchemaError = (validationError, setError) => {
    const newErrors = {};
    validationError.inner.forEach(error => {
        newErrors[error.path] = error.message;
    });
    // Set validation errors
    setError(newErrors)
}

export { todoSchema, setSchemaError }