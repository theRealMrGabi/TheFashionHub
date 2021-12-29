import { Suspense, lazy, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { GeneralLayout, Loader, NotFound } from "components";

const Home = lazy(() => import("screens/home/Home"));
const Accessories = lazy(() => import("screens/accessories/Accessories"));
const Cart = lazy(() => import("screens/cart/Cart"));
const Men = lazy(() => import("screens/men/Men"));
const Products = lazy(() => import("screens/product/Products"));
const Women = lazy(() => import("screens/women/Women"));
// const Login = lazy(() => import("screens/auth/Login"));
// const Signup = lazy(() => import("screens/auth/Signup"));
// const Wishlist = lazy(() => import("screens/wishlist/Wishlist"));
// const Checkout = lazy(() => import("screens/checkout/Checkout"));

const App: FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<GeneralLayout />}>
					<Route index element={<Home />} />
					<Route path="accessories" element={<Accessories />} />
					<Route path="cart" element={<Cart />} />
					<Route path="/men" element={<Men />} />
					<Route path="products/*" element={<Products />}></Route>
					<Route path="/women" element={<Women />} />
					{/* <Route path="/login" element={<Login />} /> */}
					{/* <Route path="/register" element={<Signup />} /> */}
					{/* <Route path="/wishlist" element={<Wishlist />} /> */}
				</Route>

				{/* <Route
					path="/checkout"
					element={
						<AuthLayout>
							<Checkout />
						</AuthLayout>
					}
				/> */}

				<Route element={NotFound} />
			</Routes>
		</Suspense>
	);
};

export default App;
