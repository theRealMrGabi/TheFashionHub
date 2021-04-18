import { Suspense, lazy, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthLayout, GeneralLayout, Loader, NotFound } from "components";

const Home = lazy(() => import("screens/home/Home"));
const Accessories = lazy(() => import("screens/accessories/Accessories"));
const About = lazy(() => import("screens/about/About"));
const Advertising = lazy(() => import("screens/advertising/Advertising"));
const Careers = lazy(() => import("screens/careers/Careers"));
const Cart = lazy(() => import("screens/cart/Cart"));
const Checkout = lazy(() => import("screens/checkout/Checkout"));
const Contact = lazy(() => import("screens/contact/Contact"));
const Faq = lazy(() => import("screens/faq/Faq"));
const Login = lazy(() => import("screens/auth/Login"));
const Men = lazy(() => import("screens/men/Men"));
const Products = lazy(() => import("screens/product/Products"));
const Signup = lazy(() => import("screens/auth/Signup"));
const SingleProduct = lazy(() => import("screens/product/SingleProduct"));
const StyleAdvice = lazy(() => import("screens/styleAdvice/StyleAdvice"));
const Terms = lazy(() => import("screens/terms/Terms"));
const Wishlist = lazy(() => import("screens/wishlist/Wishlist"));
const Women = lazy(() => import("screens/women/Women"));

const App: FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route
					path="/"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Home />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/about"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<About />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/accessories"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Accessories />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/advert"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Advertising />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/careers"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Careers />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/cart"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Cart />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/checkout"
					exact
					render={(props) => (
						<AuthLayout {...props}>
							<Checkout />
						</AuthLayout>
					)}
				/>

				<Route
					path="/contact"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Contact />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/faq"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Faq />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/login"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Login />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/men"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Men />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/products"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Products />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/products/:id"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<SingleProduct {...props} />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/register"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Signup />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/style-advice"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<StyleAdvice />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/terms"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Terms />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/wishlist"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Wishlist />
						</GeneralLayout>
					)}
				/>

				<Route
					path="/women"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Women />
						</GeneralLayout>
					)}
				/>

				<Route component={NotFound} />
			</Switch>
		</Suspense>
	);
};

export default App;
