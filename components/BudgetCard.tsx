import React from 'react'
import { useAuthStore } from '@/app/Stores/auth.store';

type Props = {}

function BudgetCard({}: Props) {

     const { itinerary } = useAuthStore(); 

  return (
    <>
         {/* Budget Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Presupuesto</p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    ${itinerary.totalBudget}
                  </h2>
                </div>
                <div className="bg-emerald-100 rounded-full p-3">
                  <span className="text-xl">💰</span>
                </div>
              </div>
            </div>
    </>
  )
}

export default BudgetCard