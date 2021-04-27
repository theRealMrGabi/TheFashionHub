import { Suspense, lazy, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthLayout, GeneralLayout, Loader, NotFound } from "components";

const Home = lazy(() => import("screens/home/Home"));
const Accessories = lazy(() => import("screens/accessories/Accessories"));
const Cart = lazy(() => import("screens/cart/Cart"));
const Checkout = lazy(() => import("screens/checkout/Checkout"));
// const Login = lazy(() => import("screens/auth/Login"));
const Men = lazy(() => import("screens/men/Men"));
const Products = lazy(() => import("screens/product/Products"));
// const Signup = lazy(() => import("screens/auth/Signup"));
const SingleProduct = lazy(() => import("screens/product/SingleProduct"));
// const Wishlist = lazy(() => import("screens/wishlist/Wishlist"));
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
					path="/accessories"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Accessories />
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

				{/* <Route
					path="/login"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Login />
						</GeneralLayout>
					)}
				/> */}

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

				{/* <Route
					path="/register"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Signup />
						</GeneralLayout>
					)}
				/> */}

				{/* <Route
					path="/wishlist"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Wishlist />
						</GeneralLayout>
					)}
				/> */}

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
