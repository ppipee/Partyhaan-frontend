import * as yup from 'yup'

const partyValidatedSchema = yup.object().shape({
	name: yup.string().required('กรุณาใส่ชื่อปาร์ตี้'),
	maxMembers: yup.number().positive().moreThan(0).required('กรุณาใส่จำนวนคนที่ขาด'),
})

export default partyValidatedSchema
