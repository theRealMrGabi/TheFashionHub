import * as Yup from "yup";

export const adressSchema = () => {
	return Yup.object().shape({
		firstName: Yup.string().trim().required("Firstname is requied"),
		lastName: Yup.string().trim().required("Lastname is requied"),
		address: Yup.string().trim().required("shipping address is requied"),
		email: Yup.string()
			.email("Please input a valid email address")
			.required("A valid email is required"),
	});
};

export const paymentSchema = () => {
	return Yup.object().shape({
		firstName: Yup.string().trim().required("Firstname is requied"),
		cardNumber: Yup.number().required("Valid card number is required"),
		cardName: Yup.string().required("Name on card is required"),
		cardExpiry: Yup.date().required("Card expiry date is required"),
		cardCVV: Yup.number().required("Card CVV is required"),
		saveCard: Yup.boolean().required(),
	});
};
