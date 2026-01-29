import React, { useState } from 'react';
import { MapPin, Clock, Navigation, DollarSign, Bus, User } from 'lucide-react';

const App = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [routes, setRoutes] = useState([]);
  const [searched, setSearched] = useState(false);

  const findRoutes = () => {
    setSearched(true);
    
    const fromLower = from.toLowerCase();
    const toLower = to.toLowerCase();
    
    let sampleRoutes = [];
    
    if ((fromLower.includes('westridge') || fromLower.includes('west ridge')) && 
        (toLower.includes('f-6') || toLower.includes('f6') || toLower.includes('coffee bean'))) {
      sampleRoutes = [
        {
          id: 1,
          totalTime: 45,
          totalFare: 50,
          steps: [
            {
              type: 'walk',
              from: 'Westridge 1, House #2',
              to: 'Saddar Metro Stop',
              duration: 8,
              distance: '0.6 km'
            },
            {
              type: 'bus',
              from: 'Saddar Metro Stop',
              to: 'Aabpara Metro Stop',
              duration: 25,
              route: 'Green Line - Rawalpindi to Islamabad',
              fare: 40,
              frequency: 'Every 10 minutes'
            },
            {
              type: 'walk',
              from: 'Aabpara Metro Stop',
              to: 'Coffee Bean & Tea Leaf, F-6 Markaz',
              duration: 12,
              distance: '0.9 km'
            }
          ]
        },
        {
          id: 2,
          totalTime: 55,
          totalFare: 45,
          steps: [
            {
              type: 'walk',
              from: 'Westridge 1, House #2',
              to: 'Committee Chowk',
              duration: 12,
              distance: '0.9 km'
            },
            {
              type: 'bus',
              from: 'Committee Chowk',
              to: 'Faizabad',
              duration: 20,
              route: 'Metro Bus',
              fare: 30,
              frequency: 'Every 15 minutes'
            },
            {
              type: 'bus',
              from: 'Faizabad',
              to: 'Aabpara',
              duration: 10,
              route: 'Green Line',
              fare: 15,
              frequency: 'Every 12 minutes'
            },
            {
              type: 'walk',
              from: 'Aabpara',
              to: 'Coffee Bean & Tea Leaf, F-6 Markaz',
              duration: 13,
              distance: '1.0 km'
            }
          ]
        }
      ];
    }
    // Route 5: Red Line Metro - FULL ROUTE (VERIFIED - Just Ridden!)
    else if ((fromLower.includes('saddar') || fromLower.includes('marrir')) && 
             (toLower.includes('stock exchange') || toLower.includes('pims') || toLower.includes('faizabad') || toLower.includes('secretariat') || toLower.includes('parade'))) {
      
      // Determine destination and adjust route accordingly
      let destination = 'Pak Secretariat';
      let duration = 40;
      let allStops = 'Saddar → Marrir Chowk → Liaquat Bagh → Committee Chowk → Waris Khan → Chandni Chowk → Rehmanabad → 6th Road → Khatam-e-Nabuwat → Chaman → Faizabad → Potohar → Khayaban-e-Johar → Ibn-e-Sina → PIMS → Stock Exchange → 7th Avenue → Shaheed-e-Millat → Parade Ground → Pak Secretariat';
      
      if (toLower.includes('stock exchange')) {
        destination = 'Stock Exchange';
        duration = 25;
      } else if (toLower.includes('pims')) {
        destination = 'PIMS Hospital';
        duration = 20;
      } else if (toLower.includes('faizabad')) {
        destination = 'Faizabad';
        duration = 15;
      }
      
      sampleRoutes = [
        {
          id: 1,
          totalTime: duration,
          totalFare: 40,
          steps: [
            {
              type: 'bus',
              from: 'Saddar, Rawalpindi',
              to: destination,
              duration: duration,
              route: 'Red Line Metrobus - ✓ VERIFIED (Ridden Today!)',
              fare: 40,
              frequency: 'Every 5-10 minutes',
              stops: allStops
            }
          ]
        }
      ];
    }
    // Route 4: Radio Pakistan to Chor Chowk (New Green Bus - Real Data)
    else if ((fromLower.includes('radio pakistan') || fromLower.includes('lane 3')) && 
             (toLower.includes('chor chowk') || toLower.includes('chor'))) {
      sampleRoutes = [
        {
          id: 1,
          totalTime: 8,
          totalFare: 20,
          steps: [
            {
              type: 'bus',
              from: 'Radio Pakistan Stop',
              to: 'Chor Chowk',
              duration: 8,
              route: 'Green Bus (Punjab Metro) - Verified Route',
              fare: 20,
              frequency: 'Every 5 minutes',
              stops: 'Radio Pakistan → Wings Bakery → Chairing Cross → Chor Chowk'
            }
          ]
        }
      ];
    }
    // Route 2: Radio Pakistan to NUST Business School
    else if ((fromLower.includes('radio pakistan') || fromLower.includes('lane 3')) && 
             (toLower.includes('nust') || toLower.includes('business school'))) {
      sampleRoutes = [
        {
          id: 1,
          totalTime: 35,
          totalFare: 50,
          steps: [
            {
              type: 'walk',
              from: 'Lane 3, Radio Pakistan',
              to: 'Faizabad Metro Stop',
              duration: 10,
              distance: '0.7 km'
            },
            {
              type: 'bus',
              from: 'Faizabad Metro Stop',
              to: 'Koral Chowk',
              duration: 20,
              route: 'Metro Bus - Islamabad Route',
              fare: 40,
              frequency: 'Every 12 minutes'
            },
            {
              type: 'walk',
              from: 'Koral Chowk',
              to: 'NUST Business School',
              duration: 5,
              distance: '0.4 km'
            }
          ]
        },
        {
          id: 2,
          totalTime: 42,
          totalFare: 45,
          steps: [
            {
              type: 'walk',
              from: 'Lane 3, Radio Pakistan',
              to: 'Peshawar Road Stop',
              duration: 5,
              distance: '0.4 km'
            },
            {
              type: 'bus',
              from: 'Peshawar Road Stop',
              to: 'Saddar',
              duration: 8,
              route: 'Local Bus',
              fare: 20,
              frequency: 'Every 10 minutes'
            },
            {
              type: 'bus',
              from: 'Saddar',
              to: 'H-12 Sector',
              duration: 22,
              route: 'Green Line',
              fare: 25,
              frequency: 'Every 15 minutes'
            },
            {
              type: 'walk',
              from: 'H-12 Sector',
              to: 'NUST Business School',
              duration: 7,
              distance: '0.5 km'
            }
          ]
        }
      ];
    }
    // Route 3: Radio Pakistan to Raja Bazaar
    else if ((fromLower.includes('radio pakistan') || fromLower.includes('lane 3')) && 
             (toLower.includes('raja') || toLower.includes('bazar') || toLower.includes('bazaar'))) {
      sampleRoutes = [
        {
          id: 1,
          totalTime: 22,
          totalFare: 30,
          steps: [
            {
              type: 'walk',
              from: 'Lane 3, Radio Pakistan',
              to: 'Peshawar Road Stop',
              duration: 5,
              distance: '0.4 km'
            },
            {
              type: 'bus',
              from: 'Peshawar Road Stop',
              to: 'Raja Bazaar',
              duration: 15,
              route: 'Local Bus Route 4',
              fare: 25,
              frequency: 'Every 8 minutes'
            },
            {
              type: 'walk',
              from: 'Raja Bazaar Bus Stop',
              to: 'Raja Bazaar Main Market',
              duration: 2,
              distance: '0.2 km'
            }
          ]
        },
        {
          id: 2,
          totalTime: 28,
          totalFare: 20,
          steps: [
            {
              type: 'walk',
              from: 'Lane 3, Radio Pakistan',
              to: 'Liaquat Bagh Stop',
              duration: 8,
              distance: '0.6 km'
            },
            {
              type: 'bus',
              from: 'Liaquat Bagh Stop',
              to: 'Committee Chowk',
              duration: 10,
              route: 'Wagon 22',
              fare: 15,
              frequency: 'Every 5 minutes'
            },
            {
              type: 'walk',
              from: 'Committee Chowk',
              to: 'Raja Bazaar Main Market',
              duration: 10,
              distance: '0.8 km'
            }
          ]
        }
      ];
    }
    else {
      sampleRoutes = [];
    }

    setRoutes(sampleRoutes);
  };

  const getStepIcon = (type) => {
    if (type === 'walk') return <User className="w-5 h-5 text-green-600" />;
    if (type === 'bus') return <Bus className="w-5 h-5 text-blue-600" />;
    return <Navigation className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Rover - Pakistan Transit
          </h1>
          <p className="text-gray-600">Your journey planner for public transport</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                From
              </label>
              <input
                type="text"
                placeholder="e.g., Saddar, Westridge, Radio Pakistan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                To
              </label>
              <input
                type="text"
                placeholder="e.g., Secretariat, F-6, PIMS, Chor Chowk"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <button
              onClick={findRoutes}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Find Routes
            </button>
          </div>
        </div>

        {searched && (
          <div className="space-y-4">
            {routes.length === 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-600">
                <p className="mb-2">No routes found for this combination yet.</p>
                <p className="text-sm">Try: Saddar to Secretariat, Radio Pakistan to Chor Chowk, or Westridge to F-6</p>
              </div>
            ) : (
              routes.map((route) => (
                <div key={route.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-5 h-5 mr-2 text-green-600" />
                        <span className="font-semibold">{route.totalTime} min</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                        <span className="font-semibold">Rs {route.totalFare}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {route.steps.filter(s => s.type === 'bus').length} transfer(s)
                    </span>
                  </div>

                  <div className="space-y-4">
                    {route.steps.map((step, idx) => (
                      <div key={idx} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          {getStepIcon(step.type)}
                          {idx < route.steps.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-300 my-2"></div>
                          )}
                        </div>
                        
                        <div className="flex-1 pb-4">
                          {step.type === 'walk' ? (
                            <div>
                              <p className="font-medium text-gray-800">
                                Walk {step.distance}
                              </p>
                              <p className="text-sm text-gray-600">
                                {step.from} → {step.to}
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                About {step.duration} minutes
                              </p>
                            </div>
                          ) : (
                            <div>
                              <p className="font-medium text-gray-800">
                                {step.route}
                              </p>
                              <p className="text-sm text-gray-600">
                                {step.from} → {step.to}
                              </p>
                              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                                <span>{step.duration} min</span>
                                <span>Rs {step.fare}</span>
                                <span>{step.frequency}</span>
                              </div>
                              {step.stops && (
                                <p className="text-xs text-gray-400 mt-1 break-words">{step.stops}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-600 bg-white rounded-lg p-4 shadow">
          <p className="font-semibold mb-1">Rover - Beta Version</p>
          <p>Routes verified by real riders. Rawalpindi-Islamabad coverage.</p>
          <p className="text-xs mt-2">✓ = Ridden and verified by actual users</p>
        </div>
      </div>
    </div>
  );
};

export default App;