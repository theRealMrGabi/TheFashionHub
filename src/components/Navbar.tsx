import { useState, FC } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Logo, Hamburger, Like, HumanPlus, Cart } from "icons";
import { Input } from "components";
import { useSelector } from "react-redux";

export const Navbar: FC = () => {
	const { cart } = useSelector((state: any) => state.cart);

	const [toggle, setToggle] = useState<boolean>(false);

	const history = useHistory();
	const handleToggle = () => setToggle(!toggle);

	return (
		<header className="mt-8 mb-16 md:mb-8 mx-8 md:mx-16">
			{/* desktop logo */}
			<div className="hidden md:block">
				<div className="flex justify-end">
					<div className="w-11/12">
						<Logo />
					</div>

					<div className="w-1/12 flex flex-row justify-evenly items-center">
						<NavLink
							to="/cart"
							className="cursor-pointer relative"
							title="Cart Items"
						>
							{cart && <div className="cart-qty">{cart?.length}</div>}
							<Cart />
						</NavLink>

						<NavLink
							to="/wishlist"
							className="cursor-pointer "
							title="Liked Items"
						>
							<Like />
						</NavLink>

						{/* <span className="cursor-pointer">
								<Human />
							</span> */}
						<NavLink
							to="/register"
							className="cursor-pointer"
							title="Login/Register"
						>
							<HumanPlus />
						</NavLink>
					</div>
				</div>
			</div>

			{/* mobile logo */}

			<div className="flex md:hidden justify-between items-center">
				<div>
					{/* <LikeIcon /> */}
					<div onClick={() => handleToggle()}>
						<Hamburger />
					</div>
				</div>
				<div>
					<Logo />
				</div>

				<div onClick={() => history.push("/cart")} className="relative">
					{cart && <div className="cart-qty">{cart?.length}</div>}
					<Cart />
				</div>
			</div>

			{/* Nav Links */}

			<nav
				className={` ${toggle ? "small-nav" : "hidden "} md:block`}
				onClick={() => handleToggle()}
			>
				<div
					className={`flex trans parent md:justify-between flex-col md:flex-row md:my-8`}
				>
					<div className="flex flex-col md:justify-between md:flex-row md:w-6/12 md:items-center child">
						<NavLink
							className="hover-animate navlink"
							activeStyle={{ color: "#2d4059" }}
							to="/products"
						>
							All
						</NavLink>

						<NavLink
							className="hover-animate navlink"
							activeStyle={{ color: "#2d4059" }}
							to="/men"
						>
							Men
						</NavLink>

						<NavLink
							className="hover-animate navlink"
							activeStyle={{ color: "#2d4059" }}
							to="/women"
						>
							Women
						</NavLink>

						<NavLink
							className="hover-animate navlink"
							activeStyle={{ color: "#2d4059" }}
							to="/accessories"
						>
							Accessories
						</NavLink>

						<NavLink
							className="hover-animate navlink md:hidden mb-4 md:mb-0"
							activeStyle={{ color: "#2d4059" }}
							to="/login"
						>
							Login
						</NavLink>
					</div>

					<div className="hidden md:flex md:w-6/12 md:justify-end md:items-center ">
						<Input type="search" placeholder="Search" />
					</div>
				</div>
			</nav>

			{/* Mobile Search Bar */}
			<div className="md:hidden absolute mt-3 w-10/12">
				<Input type="search" placeholder="Search . . ." />
			</div>
		</header>
	);
};
