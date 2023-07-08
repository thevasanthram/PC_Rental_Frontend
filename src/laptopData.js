const laptopData = [
    {
        Brand: 'Apple',
        Core: 'M1 Chip',
        Storage: '512GB SSD',
        Price: 3500
    },
    {
        Brand: 'Apple',
        Core: 'M1 Chip',
        Storage: '1TB SSD',
        Price: 3500
    },
    {
        Brand: 'Apple',
        Core: 'M2 Chip',
        Storage: '512GB SSD',
        Price: 3500
    },
    {
        Brand: 'Apple',
        Core: 'M2 Chip',
        Storage: '1TB SSD',
        Price: 3500
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2500
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2600
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2800
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3150
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3200
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3050
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3100
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3250
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Lenovo',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3500
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2500
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2600
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2800
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Dell',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3150
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3200
    },
    {
        Brand: 'Dell',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3050
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3100
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3250
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'Dell',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3500
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2500
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2600
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2800
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'HP',
        Core: 'Core i3',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 2750
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 2850
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3150
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3200
    },
    {
        Brand: 'HP',
        Core: 'Core i5',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3000
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3050
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '8GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3100
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '256GB SSD',
        Inches: '14 or 15 inches',
        Price: 3250
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '512GB SSD',
        Inches: '14 or 15 inches',
        Price: 3300
    },
    {
        Brand: 'HP',
        Core: 'Core i7',
        RAM: '16GB RAM',
        Storage: '1TB SSD',
        Inches: '14 or 15 inches',
        Price: 3500
    },
]

export default laptopData;