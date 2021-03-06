import * as yup from 'yup'

const signupValidatedSchema = yup.object().shape({
	email: yup.string().email().required('กรุณาใส่อีเมล์'),
	password: yup.string().required('กรุณาใส่รหัสผ่าน'),
	confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export default signupValidatedSchema
