import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-gray-600 mb-6">Không tìm thấy tài nguyên bạn yêu cầu.</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors font-medium"
      >
        Quay về trang chủ
      </Link>
    </div>
  )
}

export default NoPage