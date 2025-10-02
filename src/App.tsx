import { useState } from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const data = {
    pitoulis: {
      sales: 79016,
      cost: 27686,
      grossProfit: 51330,
      grossProfitPercent: 64.96,
      commission: 2566.5
    },
    total: {
      sales: 256811,
      cost: 102099.3,
      grossProfit: 154712.35,
      grossProfitPercent: 60.24
    },
    contribution: {
      salesPercent: 30.77,
      grossProfitPercent: 33.18
    }
  };

  const salesData: [string, number, number, number, number, number][] = [
    ["ΠΕΛΑΤΗΣ ΛΙΑΝΙΚΗΣ (ΑΓΙΟΣ ΝΙΚΟΛΑΟΣ)", 1104.18, 113582.64, 45392.92, 68189.72, 60.04],
    ["ΠΙΤΟΥΛΗΣ ΑΕ", 298, 79016, 27686.33, 51329.67, 64.96],
    ["TZIMAS CONSTRUCTIONS AE", 153, 21587.09, 12167.87, 9419.22, 43.63],
    ["FRANK WILEMSEN", 20, 8813.71, 2584.24, 6229.47, 70.68],
    ["Δ.ΑΓΓΕΛΟΠΟΥΛΟΣ-Α.ΠΟΛΙΤΟΥ ΕΕ", 15, 5072.58, 2635.28, 2437.3, 48.05],
    ["Alpha Max Holdings Mov. IKE", 11, 2662.1, 936.77, 1725.33, 64.81],
    ["LODORA RESIDENCES IKE", 4, 1814.52, 212.5, 1602.02, 88.29],
    ["ESSO MANDEL AE", 33, 3246.42, 1768.72, 1477.7, 45.52],
    ["SPIJKERS", 6, 1935.48, 607.76, 1327.72, 68.6],
    ["Medlicott IKE", 3, 1387.09, 158, 1229.09, 88.61],
    ["ΛΕΥΚΑΔΙΤΗ ΣΟΦΙΑ", 10, 1612.9, 588.96, 1023.94, 63.48],
    ["ΒΑΣΙΛΗΣ ΠΙΤΟΥΛΗΣ", 8, 1096.77, 482.64, 614.13, 55.99],
    ["GGRED AE", 2, 927.42, 347.85, 579.57, 62.49],
    ["ΖΑΚΙΝΘΥΝΟΣ ΑΛΕΞΑΝΔΡΟΣ Κ ΣΙΑ ΟΕ", 5, 806.45, 251.72, 554.73, 68.79],
    ["JULY DIRECT", 1, 766.13, 246.5, 519.63, 67.83],
    ["K & F HELLAS IKE", 6, 1000, 504.9, 495.1, 49.51],
    ["ΑΡΝΗ ΜΑΡΙΑ", 1, 887.1, 400, 487.1, 54.91],
    ["ΜΠΟΥΡΔΟΥΒΑΛΗΣ ΔΙΟΝΥΣΙΟΣ", 6, 1233.87, 791.7, 442.17, 35.84],
    ["DADS CAVE IKE", 9, 672.58, 246.76, 425.82, 63.31],
    ["ΡΟΜΠΟΤΗΣ ΔΗΜΗΤΡΗΣ & ΣΥΝΕΡΓΑΤΕΣ", 6, 709.68, 288.3, 421.38, 59.38],
    ["ΒΑΣΙΑ ΚΩΣΤΑΡΑ", 15, 725.81, 305.77, 420.04, 57.87],
    ["BLUE LODGE E.E.", 3, 790.32, 375.5, 414.82, 52.49],
    ["DEAR ALISON JEAN", 5, 500, 120.67, 379.33, 75.87],
    ["WEST COAST SUITES IKE", 12, 666.94, 296.5, 370.44, 55.54],
    ["ΜΙΚΡΩΝΗ ΙΩΑΝΝΑ & ΣΙΑ Ο.Ε.", 1, 548.39, 178.92, 369.47, 67.37],
    ["ΓΙΑΝΟΥΛΑΤΟΣ ΔΗΜΗΤΡΗΣ", 3, 524.19, 158.15, 366.04, 69.83],
    ["FOREST SEASON I.K.E.", 3, 580.65, 224, 356.65, 61.42],
    ["ΑΝΑΣΑ ΖΟΡΜΠΑ ΜΟΝ.ΙΚΕ", 4, 725.81, 394.34, 331.47, 45.67],
    ["ΝΙΚΗ ΜΑΡΓΕΛΗ", 1, 403.23, 161.25, 241.98, 60.01],
    ["PURE PALEROS BAY SPA EE", 91, 493.71, 252.34, 241.37, 48.89],
    ["ELSA LUXURY APARTMENTS IKE", 74, 1034.17, 919.03, 115.14, 11.13],
    ["ΜΑΡΚΕΖΙΝΗΣ ΜΑΡΙΝΟΣ", 2, 193.55, 80.32, 113.23, 58.5],
    ["SUNSET VILLA IKE", 1, 169.35, 64.74, 104.61, 61.77],
    ["SASE LIMITED IKE", 4, 165.32, 61.75, 103.57, 62.65],
    ["RODATO REAL ESTATE EE", 29, 201.61, 115.3, 86.31, 42.81],
    ["ΒΕΚΙΟΣ ΝΙΚΟΛΑΟΣ", 1, 116.94, 42.95, 73.99, 63.27],
    ["COVIELLO EDWARD", 1, 104.84, 37, 67.84, 64.71],
    ["YOGAUNION ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ", 5, 36.29, 11.05, 25.24, 69.55]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-3 md:px-6 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
            WS Πωλήσεις
          </h1>
          <h2 className="text-sm md:text-lg font-semibold text-blue-400 mb-3 md:mb-4 px-2">
            ΠΙΤΟΥΛΗΣ ΑΕ - DOMOTEL 21JUN25
          </h2>
          <p className="text-sm md:text-lg text-gray-300 px-4">
            Πρόταση για προμήθεια Αγκοπάν 5% επί Μικτού Κέρδους
          </p>
        </div>

        <div className="flex justify-center mb-6 md:mb-8 gap-2 md:gap-3 flex-wrap px-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'overview'
                ? 'bg-blue-600 shadow-xl shadow-blue-500/50'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Στοιχεία
          </button>
          <button
            onClick={() => setActiveTab('charts')}
            className={`px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'charts'
                ? 'bg-blue-600 shadow-xl shadow-blue-500/50'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Διαγράμματα
          </button>
          <button
            onClick={() => setActiveTab('breakdown')}
            className={`px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'breakdown'
                ? 'bg-blue-600 shadow-xl shadow-blue-500/50'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            Ανάλυση
          </button>
        </div>

        <div className="animate-slide-up">
          {activeTab === 'overview' && (
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 md:p-6 shadow-xl">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  Οικονομικά Στοιχεία Πώλησης
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gray-900 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                    <div className="text-sm text-white mb-2">Αξία Πώλησης</div>
                    <div className="text-3xl font-bold text-blue-400">{data.pitoulis.sales.toLocaleString('el-GR')} €</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                    <div className="text-sm text-white mb-2">Κόστος Πωληθέντων</div>
                    <div className="text-3xl font-bold text-orange-400">{data.pitoulis.cost.toLocaleString('el-GR')} €</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
                    <div className="text-sm text-white mb-2">Μικτό Κέρδος</div>
                    <div className="text-3xl font-bold text-green-400">{data.pitoulis.grossProfit.toLocaleString('el-GR')} €</div>
                    <div className="text-lg text-green-300 mt-1">{data.pitoulis.grossProfitPercent}%</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 md:p-6 shadow-xl">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Συμμετοχή στις Πωλήσεις</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gray-900 rounded-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                    <div className="text-sm text-white mb-2">Προτεινόμενη Προμήθεια</div>
                    <div className="text-4xl font-bold text-yellow-400">{data.pitoulis.commission.toLocaleString('el-GR')} €</div>
                    <div className="text-lg text-yellow-300 mt-1">5% ΜΚ</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <div className="text-sm text-white mb-2">Συμμετοχή στο Τζίρο</div>
                    <div className="text-4xl font-bold text-cyan-400">{data.contribution.salesPercent}%</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30">
                    <div className="text-sm text-white mb-2">Συμμετοχή στο Μικτό Κέρδος</div>
                    <div className="text-4xl font-bold text-emerald-400">{data.contribution.grossProfitPercent}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'charts' && (
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 md:p-6 shadow-xl">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center">Συμμετοχή Μικτό Κέρδος</h3>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold">ΠΙΤΟΥΛΗΣ ΑΕ</span>
                      <span className="text-base font-bold text-blue-400">{Math.round(data.pitoulis.grossProfit).toLocaleString('el-GR')} €</span>
                    </div>
                    <div className="relative h-12 bg-gray-900 rounded-lg overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg shadow-blue-500/50"
                        style={{ width: `${(data.pitoulis.grossProfit / data.total.grossProfit) * 100}%` }}
                      >
                        <div className="flex items-center justify-end h-full pr-3 text-sm font-bold">
                          {data.contribution.grossProfitPercent}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-base font-semibold block">Σύνολο Μικτού Κέρδους</span>
                        <span className="text-xs text-gray-400">(εξωτερικοί πελάτες)</span>
                      </div>
                      <span className="text-base font-bold text-orange-400">{Math.round(data.total.grossProfit).toLocaleString('el-GR')} €</span>
                    </div>
                    <div className="relative h-12 bg-gray-900 rounded-lg overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg shadow-lg shadow-orange-500/50"
                        style={{ width: '100%' }}
                      >
                        <div className="flex items-center justify-end h-full pr-3 text-sm font-bold">
                          100%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 md:p-6 shadow-xl">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center">Συμμετοχή Τζίρο</h3>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold">ΠΙΤΟΥΛΗΣ ΑΕ</span>
                      <span className="text-base font-bold text-blue-400">{data.pitoulis.sales.toLocaleString('el-GR')} €</span>
                    </div>
                    <div className="relative h-12 bg-gray-900 rounded-lg overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-lg shadow-blue-500/50"
                        style={{ width: `${(data.pitoulis.sales / data.total.sales) * 100}%` }}
                      >
                        <div className="flex items-center justify-end h-full pr-3 text-sm font-bold">
                          {data.contribution.salesPercent}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-base font-semibold block">Σύνολο Πωλήσεων</span>
                        <span className="text-xs text-gray-400">(εξωτερικοί πελάτες)</span>
                      </div>
                      <span className="text-base font-bold text-orange-400">{data.total.sales.toLocaleString('el-GR')} €</span>
                    </div>
                    <div className="relative h-12 bg-gray-900 rounded-lg overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg shadow-lg shadow-orange-500/50"
                        style={{ width: '100%' }}
                      >
                        <div className="flex items-center justify-end h-full pr-3 text-sm font-bold">
                          100%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'breakdown' && (
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 md:p-6 shadow-xl">
              <div className="mb-4 md:mb-6 text-center">
                <h3 className="text-lg md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  <span>Ανάλυση Πωλήσεων WS ανά πελάτη</span>
                </h3>
                <p className="text-sm md:text-base text-white mt-1">01JAN25 - 02OCT25</p>
                <p className="text-xs text-gray-400 mt-1">(εξωτερικοί πελάτες)</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-600">
                      <th className="text-left py-3 px-3 font-bold text-gray-300">Επωνυμία</th>
                      <th className="text-right py-3 px-3 font-bold text-gray-300">Q</th>
                      <th className="text-right py-3 px-3 font-bold text-gray-300">Αξία Πώλησης (€)</th>
                      <th className="text-right py-3 px-3 font-bold text-gray-300">Κόστος Πωληθέντων (€)</th>
                      <th className="text-right py-3 px-3 font-bold text-gray-300">Μικτό Κέρδος (€)</th>
                      <th className="text-right py-3 px-3 font-bold text-gray-300">% Μ Κ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((row, index) => (
                      <tr 
                        key={index}
                        className={`border-b border-gray-700 transition-colors duration-200 ${
                          row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' 
                            ? 'bg-gray-900 hover:bg-gray-800' 
                            : 'hover:bg-gray-700/30'
                        }`}
                      >
                        <td className={`py-3 px-3 ${row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' ? 'font-bold text-blue-400' : ''}`}>
                          {row[0]}
                        </td>
                        <td className={`text-right py-3 px-3 ${row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' ? 'font-bold' : ''}`}>
                          {Math.round(row[1]).toLocaleString('el-GR')}
                        </td>
                        <td className={`text-right py-3 px-3 ${row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' ? 'font-bold' : ''}`}>
                          {Math.round(row[2]).toLocaleString('el-GR')}
                        </td>
                        <td className={`text-right py-3 px-3 text-orange-300 ${row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' ? 'font-bold' : ''}`}>
                          {Math.round(row[3]).toLocaleString('el-GR')}
                        </td>
                        <td className={`text-right py-3 px-3 text-green-400 ${row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' ? 'font-bold' : ''}`}>
                          {Math.round(row[4]).toLocaleString('el-GR')}
                        </td>
                        <td className={`text-right py-3 px-3 text-green-300 ${row[0] === 'ΠΙΤΟΥΛΗΣ ΑΕ' ? 'font-bold' : ''}`}>
                          {row[5].toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-yellow-500 bg-yellow-900/40 font-bold">
                      <td className="py-4 px-3 text-yellow-200">Σύνολα</td>
                      <td className="text-right py-4 px-3 text-yellow-200">
                        {Math.round(salesData.reduce((sum, row) => sum + row[1], 0)).toLocaleString('el-GR')}
                      </td>
                      <td className="text-right py-4 px-3 text-yellow-200">
                        {Math.round(salesData.reduce((sum, row) => sum + row[2], 0)).toLocaleString('el-GR')}
                      </td>
                      <td className="text-right py-4 px-3 text-yellow-200">
                        {Math.round(salesData.reduce((sum, row) => sum + row[3], 0)).toLocaleString('el-GR')}
                      </td>
                      <td className="text-right py-4 px-3 text-yellow-200">
                        {Math.round(salesData.reduce((sum, row) => sum + row[4], 0)).toLocaleString('el-GR')}
                      </td>
                      <td className="text-right py-4 px-3 text-yellow-200">
                        {((salesData.reduce((sum, row) => sum + row[4], 0) / salesData.reduce((sum, row) => sum + row[2], 0)) * 100).toFixed(2)}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 md:mt-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 md:p-6 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gray-900 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    <div className="text-sm text-white mb-2">Συμμετοχή Τζίρου</div>
                    <div className="text-2xl font-bold text-cyan-400">{data.contribution.salesPercent}%</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30">
                    <div className="text-sm text-white mb-2">Συμμετοχή ΜΚ</div>
                    <div className="text-2xl font-bold text-emerald-400">{data.contribution.grossProfitPercent}%</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                    <div className="text-sm text-white mb-2">Προμήθεια 5%</div>
                    <div className="text-2xl font-bold text-yellow-400">{data.pitoulis.commission.toLocaleString('el-GR')} €</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
