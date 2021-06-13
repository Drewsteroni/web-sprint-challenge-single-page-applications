import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().trim().required('Name is required.').min(2, "name must be at least 2 characters"),
    size: Yup.string().required('Size is required.'),
    pepperoni: Yup.boolean(),
    mushrooms: Yup.boolean(),
    peppers: Yup.boolean(),
    artichokes: Yup.boolean(),
    special: Yup.string()
})