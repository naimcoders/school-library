import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Index from "./pages/Index"
import './App.css'
import DeleteBook from "./fatchers/DeleteBook"

const AdminBooks = lazy(() => import('./pages/admin/Books'))
const StudentBooks = lazy(() => import('./pages/student/Books'))
const AddBook = lazy(() => import('./pages/admin/AddBook'))
const UpdateBook = lazy(() => import('./pages/admin/UpdateBook'))
const RegisterAdmin = lazy(() => import('./pages/admin/RegisterAdmin'))
const LoginAdmin = lazy(() => import('./pages/admin/LoginAdmin'))
const LoginStudent = lazy(() => import('./pages/student/LoginStudent'))
const RegisterStudent = lazy(() => import('./pages/student/RegisterStudent'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/admin/books"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <AdminBooks />
          </Suspense>
        }
      />
      <Route
        path="/student/books"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <StudentBooks />
          </Suspense>
        }
      />
      <Route
        path="/admin/books/add_book"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <AddBook />
          </Suspense>
        }
      />
      <Route
        path="/delete/:id/:image"
        element={<DeleteBook />}
      />
      <Route
        path="/edit/:id/:image"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <UpdateBook />
          </Suspense>
        }
      />
      <Route
        path="/register_admin"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <RegisterAdmin />
          </Suspense>
        }
      />
      <Route
        path="/login_admin"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <LoginAdmin />
          </Suspense>
        }
      />
      <Route
        path="/login_student"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <LoginStudent />
          </Suspense>
        }
      />
      <Route
        path="/register_student"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <RegisterStudent />
          </Suspense>
        }
      />
    </Routes>    
  )
}

export default App