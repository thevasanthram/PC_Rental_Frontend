const laptopData = {
    'Dell': {
        'Core i3': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2500
                },
                '512GB SSD': {
                    '14 or 15 inches': 2600
                },
                '1TB SSD': {
                    '14 or 15 inches': 2750
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2800
                },
                '512GB SSD': {
                    '14 or 15 inches': 2850
                },
                '1TB SSD': {
                    '14 or 15 inches': 3000
                }
            }
        },
        'Core i5': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2750
                },
                '512GB SSD': {
                    '14 or 15 inches': 2850
                },
                '1TB SSD': {
                    '14 or 15 inches': 3000
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3150
                },
                '512GB SSD': {
                    '14 or 15 inches': 3200
                },
                '1TB SSD': {
                    '14 or 15 inches': 3300
                }
            }
        },
        'Core i7': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3000
                },
                '512GB SSD': {
                    '14 or 15 inches': 3050
                },
                '1TB SSD': {
                    '14 or 15 inches': 3100
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3250
                },
                '512GB SSD': {
                    '14 or 15 inches': 3300
                },
                '1TB SSD': {
                    '14 or 15 inches': 3500
                }
            }
        }
    },
    'Lenovo': {
        'Core i3': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2500
                },
                '512GB SSD': {
                    '14 or 15 inches': 2600
                },
                '1TB SSD': {
                    '14 or 15 inches': 2750
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2800
                },
                '512GB SSD': {
                    '14 or 15 inches': 2850
                },
                '1TB SSD': {
                    '14 or 15 inches': 3000
                }
            }
        },
        'Core i5': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2750
                },
                '512GB SSD': {
                    '14 or 15 inches': 2850
                },
                '1TB SSD': {
                    '14 or 15 inches': 3000
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3150
                },
                '512GB SSD': {
                    '14 or 15 inches': 3200
                },
                '1TB SSD': {
                    '14 or 15 inches': 3300
                }
            }
        },
        'Core i7': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3000
                },
                '512GB SSD': {
                    '14 or 15 inches': 3050
                },
                '1TB SSD': {
                    '14 or 15 inches': 3100
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3250
                },
                '512GB SSD': {
                    '14 or 15 inches': 3300
                },
                '1TB SSD': {
                    '14 or 15 inches': 3500
                }
            }
        }
    },
    'HP': {
        'Core i3': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2500
                },
                '512GB SSD': {
                    '14 or 15 inches': 2600
                },
                '1TB SSD': {
                    '14 or 15 inches': 2750
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2800
                },
                '512GB SSD': {
                    '14 or 15 inches': 2850
                },
                '1TB SSD': {
                    '14 or 15 inches': 3000
                }
            }
        },
        'Core i5': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 2750
                },
                '512GB SSD': {
                    '14 or 15 inches': 2850
                },
                '1TB SSD': {
                    '14 or 15 inches': 3000
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3150
                },
                '512GB SSD': {
                    '14 or 15 inches': 3200
                },
                '1TB SSD': {
                    '14 or 15 inches': 3300
                }
            }
        },
        'Core i7': {
            '8GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3000
                },
                '512GB SSD': {
                    '14 or 15 inches': 3050
                },
                '1TB SSD': {
                    '14 or 15 inches': 3100
                }
            },
            '16GB RAM': {
                '256GB SSD': {
                    '14 or 15 inches': 3250
                },
                '512GB SSD': {
                    '14 or 15 inches': 3300
                },
                '1TB SSD': {
                    '14 or 15 inches': 3500
                }
            }
        }
    },
}

let object = []

Object.keys(laptopData).map((Brand) => {
    Object.keys(laptopData[Brand]).map((Core) => {
        Object.keys(laptopData[Brand][Core]).map((RAM) => {
            Object.keys(laptopData[Brand][Core][RAM]).map((Storage) => {
                Object.keys(laptopData[Brand][Core][RAM][Storage]).map((Inches) => {
                    const temp = {}
                    temp['Brand'] = Brand
                    temp['Core'] = Core
                    temp['RAM'] = RAM
                    temp['Storage'] = Storage
                    temp['Inches'] = Inches
                    temp['Price'] = laptopData[Brand][Core][RAM][Storage][Inches]
                    object.push(temp)
                })      
            })
        })
    })
})

console.log(object)