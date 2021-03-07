import * as yup from 'yup'

const signupValidatedSchema = yup.object().shape({
	email: yup.string().email('กรุณาใส่อีเมลให้ถูกต้อง').required('กรุณาใส่อีเมล'),
	password: yup.string().required('กรุณาใส่รหัสผ่าน'),
	confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'รหัสผ่านไม่ตรงกัน'),
	consent: yup.boolean().isTrue('กรุณายอมรับเงื่อนไข'),
})

export default signupValidatedSchema
