import React from 'react';
import './../css/RentalPage.css'
import TwoLaptops from './../images/lenovo-laptop-collection.png'

function RentalPage() {
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

    return (
        <div id='rental_pc_component'>
            <div id='filtering_condition_container'>
                <select id="input_brand" className='filtering_condition_input'>
                    <option value="Brand">Brand</option>
                    <option value="Dell">Dell</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Lenovo">HP</option>
                </select>
                <select id="input_processor" className='filtering_condition_input'>
                    <option value="Processor">Processor</option>
                    <option value="Lenovo">i3</option>
                    <option value="Lenovo">i5</option>
                    <option value="Lenovo">i7</option>
                </select>
                <select id="input_ram" className='filtering_condition_input'>
                    <option value="RAM">RAM</option>
                    <option value="Lenovo">8 GB</option>
                    <option value="Lenovo">16 GB</option>
                </select>
                <select id="input_storage" className='filtering_condition_input'>
                    <option value="Storage">Storage</option>
                    <option value="Lenovo">250 GB SSD</option>
                    <option value="Lenovo">500 GB SSD</option>
                    <option value="Lenovo">1 tTB SSD</option>
                </select>
                <select id="input_edition" className='filtering_condition_input'>
                    <option value="Edition">Edition</option>
                    <option value="Lenovo">14</option>
                    <option value="Lenovo">15</option>
                </select>
            </div>
            <div id='rental_pc_container'>
                {
                    Object.keys(laptopData).map( (Brand) => (
                        Object.keys(laptopData[Brand]).map( (Core) => (
                            Object.keys(laptopData[Brand][Core]).map( (RAM) => (
                                Object.keys(laptopData[Brand][Core][RAM]).map( (Storage) => (
                                    Object.keys(laptopData[Brand][Core][RAM][Storage]).map( (Inches) => (
                                        <div className='rental_pc_card'>
                                            <div className='rental_pc_image_container'>
                                                <img src={TwoLaptops} alt="" className='pc_rental_image' />
                                            </div>
                                            <div className='rental_pc_name'>{Brand}</div>
                                            <div className='rental_pc_spec'>
                                                <li>{Core}</li>
                                                <li>{RAM}</li>
                                                <li>{Storage}</li>
                                                <li>{Inches}</li>
                                            </div>
                                            <div className='rental_pc_price'>
                                                Rs. {laptopData[Brand][Core][RAM][Storage][Inches]} / month
                                            </div>
                                        </div>
                                    ))
                                ))
                            ))
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default RentalPage;