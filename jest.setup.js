require('@testing-library/jest-dom');

// Clear localStorage/state between tests for isolation
afterEach(() => {
	if (typeof window !== 'undefined' && window.localStorage) {
		window.localStorage.clear();
	}
});
