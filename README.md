# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



// customer and admin dashboard

/*
Notes, extension points, and integration tips:
- Replace mock fetchInquiries thunk with real API calls (use createAsyncThunk with fetch/axios).
- Move mock/data.json to your real API seed or server API.
- Use Redux Toolkit Query (RTK Query) when integrating a real backend for caching and easy mutation handling.
- Add form validation (yup/react-hook-form) for profile and product forms.
- For file uploads, integrate a FileUploader component with presigned S3 uploads for large files.
- Add websocket / SSE to push live notifications (replace pushNotification with server messages).
- For role-based routing, add an auth wrapper route that inspects auth.user.role and conditionally allows access.