const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: '_metadata.json',
    collection_contract_address: '0xfe81C4Cdb8b21753ebe117c846652D6588E150FF',
    collection_name: 'Steak Bites',
    collection_description: 'Steaks around the world. A unique 10k collection of steaks that ventured around the world, picking up epic gear and stamps as they travelled through epic countries. The T-Bone steak is the team\'s favourite cut of meat and it is also the main character of the collection.',
    collection_id_from: 0,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.steakbites',
    ga: '',
    main_og_image: 'https://lh3.googleusercontent.com/u4zqDXdIAna46175gnXM9mnZS_XZuCd57kq0oG4f20TmS5dqAfCk3NORqWd7XeNfPWBJdsu77TfWHv_1bdsN5IyvCiPks1kpBdKsPQ=w600',
    item_path_name: 'steakbite',
    page_item_num: 50,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: false
};

module.exports = config;