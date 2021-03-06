import * as yup from 'yup'

const signinValidatedSchema = yup.object().shape({
	email: yup.string().required('กรุณาใส่อีเมล์'),
	password: yup.string().required('กรุณาใส่รหัสผ่าน'),
})

export default signinValidatedSchema
