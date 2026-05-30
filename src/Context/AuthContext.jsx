import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { mockGoogleSignIn } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const saved = localStorage.getItem("sand-user");
		if (saved) {
			try {
				setUser(JSON.parse(saved));
			} catch (err) {
				setUser(null);
			}
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		if (user) {
			localStorage.setItem("sand-user", JSON.stringify(user));
		} else {
			localStorage.removeItem("sand-user");
		}
	}, [user]);

	const signInWithGoogleMock = async (displayName) => {
		const response = await mockGoogleSignIn(displayName);
		setUser(response.user);
		return response.user;
	};

	const signOut = () => {
		setUser(null);
	};

	const value = useMemo(
		() => ({
			user,
			loading,
			signInWithGoogleMock,
			signOut,
		}),
		[user, loading],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) {
		throw new Error("useAuth must be used inside AuthProvider");
	}
	return ctx;
}
