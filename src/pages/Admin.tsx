import { useAuth } from '../context/AuthContext';

export function Admin() {
  const { getAllUsers } = useAuth();
  const users = getAllUsers();

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-3xl font-bold text-[var(--color-trust-blue)]">Admin Dashboard</h2>
        <span className="text-sm bg-blue-100 text-[var(--color-trust-blue)] px-3 py-1 rounded-full font-medium">
          Super Admin
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-semibold text-gray-700">Email</th>
              <th className="p-4 font-semibold text-gray-700">Status</th>
              <th className="p-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-gray-500">No users found.</td>
              </tr>
            ) : (
              users.map((u, i) => {
                const isCertified = u.isCertified;
                const isPassedQuiz = u.passedQuiz;
                const statusClass = isCertified 
                  ? "bg-[var(--color-growth-green)] text-white" 
                  : isPassedQuiz 
                    ? "bg-blue-100 text-blue-800" 
                    : "bg-yellow-100 text-yellow-800";
                
                const statusText = isCertified 
                  ? "Certified" 
                  : isPassedQuiz 
                    ? "Passed Quiz" 
                    : "Learning";

                return (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-800">{u.email}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusClass}`}>
                        {statusText}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-sm text-gray-500 hover:text-[var(--color-trust-blue)] underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
