// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Allura } from 'next/font/google'
// import { FiShoppingCart } from 'react-icons/fi'
// import { SnackbarProvider, useSnackbar } from 'notistack'
// import { title } from 'process'

// const allura = Allura({ subsets: ['latin'], weight: '400' })

// // Fake product database with subcategories
// const products = [
//   // Men
//   { id: 1, title: 'Classic White Tee', price: 40, category: 'men', type: 'T-Shirt', img: 'https://img01.ztat.net/article/spp-media-p1/b0a454b3467344b4af21bae64878c09d/30d070b923bf4a64a38c251c62cf07e9.jpg' },
//   { id: 2, title: 'Tailored Trousers', price: 85, category: 'men', type: 'Trousers', img: 'https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J30J326927_PAN_main?$b2c_updp_m_mainImage_1920$' },
//   { id: 3, title: 'Black Hoodie', price: 65, category: 'men', type: 'Hoodie', img: 'https://media.weekday.com/static/products/dc/81/dc8180c429cb84b22bfe354d21e13a2a205e6391_xl-1.jpg?imwidth=1600' },
//   { id: 4, title: 'Slim Fit Jeans', price: 70, category: 'men', type: 'Jeans', img: 'https://lscoglobal.scene7.com/is/image/lscoglobal/28833-1308_M_JEANS_SKINNY?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1200&hei=1500' },
//   { id: 5, title: 'Checked Shirt', price: 55, category: 'men', type: 'Shirt', img: 'https://images.bewakoof.com/original/men-s-blue-white-checked-oversized-shirt-650005-1728285301-1.jpg' },
//   { id: 6, title: 'Bomber Jacket', price: 120, category: 'men', type: 'Jacket', img: 'https://media.boohoo.com/i/boohoo/bmm57372_charcoal_xl/male-charcoal-basic-nylon-bomber-jacket/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' },
//   { id: 7, title: 'Graphic Tee', price: 45, category: 'men', type: 'T-Shirt', img: 'https://veirdo.in/cdn/shop/files/ai_creative_0000_Layer_6.jpg?v=1754546584&width=533' },
//   { id: 8, title: 'Chino Pants', price: 60, category: 'men', type: 'Trousers', img: 'https://thestreetsofseoul.com/cdn/shop/files/Essential-Cotton-Chino-Pants-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.webp' },
//   { id: 9, title: 'Zip Hoodie', price: 70, category: 'men', type: 'Hoodie', img: 'https://media.boohoo.com/i/boohoo/mzz89514_brown_xl?pdp.template' },
//   { id: 10, title: 'Leather Jacket', price: 200, category: 'men', type: 'Jacket', img: 'https://lh6.googleusercontent.com/proxy/Abzpy9yFNEC72OIC4gYegBqr-H_ttuwBK8GB4MOi2vO7DcH0XrtPRywBh7ErYDPh5ZyxfM5i50lN9yz85uA6-dV5lqAf7yMXtWfGMyPn8LDireCtP6M7ZtFFj47k3Bl1RlRu3siH_e0E27C3Al4wuCmNu9T_9K0PpOdo0tIA_J64GC8' },
//   { id: 31, title: 'Baggy Jeans', price: 85, category: 'men', type: 'Jeans', img: 'https://thestreetsofseoul.com/cdn/shop/files/Ripped-Knee-Grey-Wash-Baggy-Jeans-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.webp' },
//   { id: 32, title: 'Blue Baggy Jeans', price: 85, category: 'men', type: 'Jeans', img: 'https://media.boohoo.com/i/boohoo/bmm91589_antique%20blue_xl/male-antique%20blue-extreme-baggy-rigid-tinted-wash-jeans/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' },
//   { id: 33, title: 'Varsity Jacket', price: 100, category: 'men', type: 'Jacket', img: 'https://eu.cernucci.com/cdn/shop/files/SH-NVROW01DH-M-O-8.jpg?v=1725026277&width=1200' },
//   { id: 34, title: 'Black Oversized Tee', price: 90, category: 'men', type: 'T-Shirt', img: 'https://media.boohoo.com/i/boohoo/bmm18465_black_xl?$product_image_main_mobile$&fmt=webp' },
//   { id: 35, title: 'Cuban Beach Shirt', price: 80, category: 'men', type: 'Shirt', img: 'https://img.kwcdn.com/product/open/2024-06-17/1718631271590-def49a8c271f43efb3dfc70545c8c1f3-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },

//   // Women
//   { id: 11, title: 'Slip Dress', price: 95, category: 'women', type: 'Dress', img: 'https://itsmilla.com/cdn/shop/files/MillaEvening20238577_1024x.jpg?v=1751542865' },
//   { id: 12, title: 'Wide Leg Pants', price: 110, category: 'women', type: 'Trousers', img: 'https://anninc.scene7.com/is/image/LO/753627_8943?$436x502$' },
//   { id: 13, title: 'Cropped Blazer', price: 150, category: 'women', type: 'Blazer', img: 'https://luckybrand.bynder.com/match/WebName/7W31581A_243_2/CROPPED_BLAZER_243?preset=wblg' },
//   { id: 14, title: 'Floral Maxi Dress', price: 120, category: 'women', type: 'Dress', img: 'https://www.reddress.com/cdn/shop/files/10-9-24-PartII297539.jpg?v=1737987265' },
//   { id: 15, title: 'Denim Skirt', price: 70, category: 'women', type: 'Skirt', img: 'https://i.etsystatic.com/35566366/r/il/e73347/4532115274/il_570xN.4532115274_ogo5.jpg' },
//   { id: 16, title: 'Silk Blouse', price: 90, category: 'women', type: 'Shirt', img: 'https://www.adjoaa.com/cdn/shop/files/4R6A1296-Edit-scaled_900x.jpg?v=1726720134' },
//   { id: 17, title: 'Crochet Dress', price: 80, category: 'women', type: 'Dress', img: 'https://meshki.co.uk/cdn/shop/files/kayleigh-mini-white-front.jpg?v=1754636415&width=1946' },
//   { id: 18, title: 'Tailored Pants', price: 100, category: 'women', type: 'Trousers', img: 'https://cdn.media.amplience.net/i/vince/V049522335_107RYE_001/High-Waist-Tailored-Wide-Leg-Trouser-107RYE?w=736&h=1024&fmt=auto&qlt=default&bg=rgb(241%2C241%2C241)' },
//   { id: 19, title: 'Relaxed Jacket', price: 150, category: 'women', type: 'Jacket', img: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_2560,q_auto,f_auto/MS_10_T83_8266D_Y0_X_EC_0' },
//   { id: 20, title: 'Cami Top', price: 45, category: 'women', type: 'T-Shirt', img: 'https://basicallybasic.in/cdn/shop/files/BasicallyBasic-29800_1080x.jpg?v=1696394101' },
//   { id: 36, title: 'Cardigan Sweater', price: 40, category: 'women', type: 'Hoodie', img: 'https://www.monsoonlondon.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwbb4d79f7/images/large/21_10012010007_1.jpg?sw=663&sh=848&sm=cut' },
//   { id: 37, title: 'Cotton Blouse', price: 60, category: 'women', type: 'Shirt', img: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/F33436.jpg?im=Resize,width=450'},
//   { id: 38, title: 'Tight Skirt', price: 40, category: 'women', type: 'Skirt', img: 'https://cdn.shopify.com/s/files/1/0293/9277/products/OliveOilIISkirt-Chocolate1_MER.jpg?v=1633735220'},
//   { id: 39, title: 'Cargo Pants', price: 75, category: 'women', type: 'Trousers', img: 'https://m.media-amazon.com/images/I/71npUbrO1TL._UY1000_.jpg'},
//   { id: 40, title: 'Crowl Neck Dress', price: 55, category: 'women', type: 'Dress', img: 'https://m.media-amazon.com/images/I/61dRs7EAm9L._UF894,1000_QL80_.jpg'},

//   // Kids
//   { id: 21, title: 'Kids Hoodie', price: 40, category: 'kids', type: 'Hoodie', img: 'https://www.mypersonalisedclothing.com/wp-content/uploads/2021/04/JH01J_LS05_2021.png' },
//   { id: 22, title: 'Mini Denim Jacket', price: 55, category: 'kids', type: 'Jacket', img: 'https://www.gapcanada.ca/webcontent/0059/144/857/cn59144857.jpg' },
//   { id: 23, title: 'Kids T-Shirt', price: 25, category: 'kids', type: 'T-Shirt', img: 'https://www.naturesupplyco.com/cdn/shop/products/Bee_The_Change_Kids_Cream_1365x.jpg?v=1627072548' },
//   { id: 24, title: 'Kids Shorts', price: 20, category: 'kids', type: 'Shorts', img: 'https://down-ph.img.susercontent.com/file/c9e935a68eb05aa5490c20c1cdad5bfd' },
//   { id: 25, title: 'Kids Leggings', price: 18, category: 'kids', type: 'Trousers', img: 'https://www.demozastores.com/cdn/shop/products/2_e736d041-cf1c-49a7-9d02-3641e439c919.jpg?v=1753461739&width=1200' },
//   { id: 26, title: 'Kids Dress', price: 35, category: 'kids', type: 'Dress', img: 'https://lemonieboutique.com/cdn/shop/products/image_d575d8bb-877d-4ba1-a59e-9d75e343d5c2.jpg?v=1680431874&width=1445' },
//   { id: 27, title: 'Kids Sweater', price: 30, category: 'kids', type: 'Sweater', img: 'https://cdn.shopify.com/s/files/1/0507/8112/6832/products/c311-blue--616x750.jpg' },
//   { id: 28, title: 'Kids Jacket', price: 45, category: 'kids', type: 'Jacket', img: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-kids/default/dw6760a225/7344458/7344458-02-2.jpg?sw=640&sh=960&sm=fit' },
//   { id: 29, title: 'Kids Polo', price: 28, category: 'kids', type: 'Shirt', img: 'https://www.mypersonalisedclothing.com/wp-content/uploads/2023/02/ss417_lifestyle_1.png' },
//   { id: 30, title: 'Kids Hoodie Print', price: 42, category: 'kids', type: 'Hoodie', img: 'https://contents.mediadecathlon.com/p2794155/k$016a53e708787c5f87cb432dcfa77f37/picture.jpg' },
// ]


// function ShopContent() {
//   const [category, setCategory] = useState('all')
//   const [subCategory, setSubCategory] = useState('all')
//   const [cart, setCart] = useState([])
//   const { enqueueSnackbar } = useSnackbar()

//   const filteredProducts = products.filter(p => {
//     const catMatch = category === 'all' || p.category === category
//     const subMatch = subCategory === 'all' || p.type === subCategory
//     return catMatch && subMatch
//   })

//   const addToCart = (product) => {
//     setCart([...cart, product])
//     enqueueSnackbar(`${product.title} added to cart`, { variant: 'success' })
//   }

//   // Get subcategories for selected category
//   const subCategories = ['all', ...Array.from(new Set(products.filter(p => p.category === category).map(p => p.type)))]

//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className={`${allura.className} text-6xl md:text-7xl text-black text-center`}
//         >
//           Shop Arden
//         </motion.h1>

//         {/* Categories */}
//         <div className="flex flex-wrap justify-center gap-4 mt-10">
//           {['all', 'men', 'women', 'kids'].map(cat => (
//             <button
//               key={cat}
//               onClick={() => { setCategory(cat); setSubCategory('all') }}
//               className={`px-5 py-2 rounded-full border transition text-black ${
//                 category === cat ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
//               }`}
//             >
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Subcategories */}
//         {category !== 'all' && (
//           <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm font-medium">
//             {subCategories.map(sub => (
//               <button
//                 key={sub}
//                 onClick={() => setSubCategory(sub)}
//                 className={`px-4 py-1 rounded-full border transition text-black ${
//                   subCategory === sub ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
//                 }`}
//               >
//                 {sub}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Product Grid */}
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//           {filteredProducts.map((product, i) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05, duration: 0.5 }}
//               className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white border"
//             >
//               <img
//                 src={product.img}
//                 alt={product.title}
//                 className="w-full h-[280px] object-cover object-center group-hover:scale-105 transition duration-[1500ms]"
//               />
//               <div className="p-4 flex flex-col justify-between">
//                 <h3 className="text-base font-semibold text-gray-800">{product.title}</h3>
//                 <p className="text-sm text-gray-500">${product.price}</p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-3 p-2 rounded-full bg-black text-white hover:bg-gray-800 transition self-start"
//                 >
//                   <FiShoppingCart size={18} />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function Shop() {
//   return (
//     <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
//       <ShopContent />
//     </SnackbarProvider>
//   )
// }


'use client'

import { useState, useContext } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Allura } from 'next/font/google'
import { FiShoppingCart } from 'react-icons/fi'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { CartContext } from '@/context/CartContext' // global cart context

const allura = Allura({ subsets: ['latin'], weight: '400' })

const products = [
  // Men
  { id: 1, title: 'Classic White Tee', price: 40, category: 'men', type: 'T-Shirt', img: 'https://img01.ztat.net/article/spp-media-p1/b0a454b3467344b4af21bae64878c09d/30d070b923bf4a64a38c251c62cf07e9.jpg' },
  { id: 2, title: 'Tailored Trousers', price: 85, category: 'men', type: 'Trousers', img: 'https://calvinklein-eu.scene7.com/is/image/CalvinKleinEU/J30J326927_PAN_main?$b2c_updp_m_mainImage_1920$' },
  { id: 3, title: 'Black Hoodie', price: 65, category: 'men', type: 'Hoodie', img: 'https://media.weekday.com/static/products/dc/81/dc8180c429cb84b22bfe354d21e13a2a205e6391_xl-1.jpg?imwidth=1600' },
  { id: 4, title: 'Slim Fit Jeans', price: 70, category: 'men', type: 'Jeans', img: 'https://lscoglobal.scene7.com/is/image/lscoglobal/28833-1308_M_JEANS_SKINNY?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1200&hei=1500' },
  { id: 5, title: 'Checked Shirt', price: 55, category: 'men', type: 'Shirt', img: 'https://images.bewakoof.com/original/men-s-blue-white-checked-oversized-shirt-650005-1728285301-1.jpg' },
  { id: 6, title: 'Bomber Jacket', price: 120, category: 'men', type: 'Jacket', img: 'https://media.boohoo.com/i/boohoo/bmm57372_charcoal_xl/male-charcoal-basic-nylon-bomber-jacket/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' },
  { id: 7, title: 'Graphic Tee', price: 45, category: 'men', type: 'T-Shirt', img: 'https://veirdo.in/cdn/shop/files/ai_creative_0000_Layer_6.jpg?v=1754546584&width=533' },
  { id: 8, title: 'Chino Pants', price: 60, category: 'men', type: 'Trousers', img: 'https://thestreetsofseoul.com/cdn/shop/files/Essential-Cotton-Chino-Pants-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.webp' },
  { id: 9, title: 'Zip Hoodie', price: 70, category: 'men', type: 'Hoodie', img: 'https://media.boohoo.com/i/boohoo/mzz89514_brown_xl?pdp.template' },
  { id: 10, title: 'Leather Jacket', price: 200, category: 'men', type: 'Jacket', img: 'https://lh6.googleusercontent.com/proxy/Abzpy9yFNEC72OIC4gYegBqr-H_ttuwBK8GB4MOi2vO7DcH0XrtPRywBh7ErYDPh5ZyxfM5i50lN9yz85uA6-dV5lqAf7yMXtWfGMyPn8LDireCtP6M7ZtFFj47k3Bl1RlRu3siH_e0E27C3Al4wuCmNu9T_9K0PpOdo0tIA_J64GC8' },
  { id: 31, title: 'Baggy Jeans', price: 85, category: 'men', type: 'Jeans', img: 'https://thestreetsofseoul.com/cdn/shop/files/Ripped-Knee-Grey-Wash-Baggy-Jeans-thestreetsofseoul-korean-street-style-minimal-streetwear-k-style-kstyle-mens-affordable-clothing.webp' },
  { id: 32, title: 'Blue Baggy Jeans', price: 85, category: 'men', type: 'Jeans', img: 'https://media.boohoo.com/i/boohoo/bmm91589_antique%20blue_xl/male-antique%20blue-extreme-baggy-rigid-tinted-wash-jeans/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' },
  { id: 33, title: 'Varsity Jacket', price: 100, category: 'men', type: 'Jacket', img: 'https://eu.cernucci.com/cdn/shop/files/SH-NVROW01DH-M-O-8.jpg?v=1725026277&width=1200' },
  { id: 34, title: 'Black Oversized Tee', price: 90, category: 'men', type: 'T-Shirt', img: 'https://media.boohoo.com/i/boohoo/bmm18465_black_xl?$product_image_main_mobile$&fmt=webp' },
  { id: 35, title: 'Cuban Beach Shirt', price: 80, category: 'men', type: 'Shirt', img: 'https://img.kwcdn.com/product/open/2024-06-17/1718631271590-def49a8c271f43efb3dfc70545c8c1f3-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },

  // Women
  { id: 11, title: 'Slip Dress', price: 95, category: 'women', type: 'Dress', img: 'https://itsmilla.com/cdn/shop/files/MillaEvening20238577_1024x.jpg?v=1751542865' },
  { id: 12, title: 'Wide Leg Pants', price: 110, category: 'women', type: 'Trousers', img: 'https://anninc.scene7.com/is/image/LO/753627_8943?$436x502$' },
  { id: 13, title: 'Cropped Blazer', price: 150, category: 'women', type: 'Blazer', img: 'https://luckybrand.bynder.com/match/WebName/7W31581A_243_2/CROPPED_BLAZER_243?preset=wblg' },
  { id: 14, title: 'Floral Maxi Dress', price: 120, category: 'women', type: 'Dress', img: 'https://www.reddress.com/cdn/shop/files/10-9-24-PartII297539.jpg?v=1737987265' },
  { id: 15, title: 'Denim Skirt', price: 70, category: 'women', type: 'Skirt', img: 'https://i.etsystatic.com/35566366/r/il/e73347/4532115274/il_570xN.4532115274_ogo5.jpg' },
  { id: 16, title: 'Silk Blouse', price: 90, category: 'women', type: 'Shirt', img: 'https://www.adjoaa.com/cdn/shop/files/4R6A1296-Edit-scaled_900x.jpg?v=1726720134' },
  { id: 17, title: 'Crochet Dress', price: 80, category: 'women', type: 'Dress', img: 'https://meshki.co.uk/cdn/shop/files/kayleigh-mini-white-front.jpg?v=1754636415&width=1946' },
  { id: 18, title: 'Tailored Pants', price: 100, category: 'women', type: 'Trousers', img: 'https://cdn.media.amplience.net/i/vince/V049522335_107RYE_001/High-Waist-Tailored-Wide-Leg-Trouser-107RYE?w=736&h=1024&fmt=auto&qlt=default&bg=rgb(241%2C241%2C241)' },
  { id: 19, title: 'Relaxed Jacket', price: 150, category: 'women', type: 'Jacket', img: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_2560,q_auto,f_auto/MS_10_T83_8266D_Y0_X_EC_0' },
  { id: 20, title: 'Cami Top', price: 45, category: 'women', type: 'T-Shirt', img: 'https://basicallybasic.in/cdn/shop/files/BasicallyBasic-29800_1080x.jpg?v=1696394101' },
  { id: 36, title: 'Cardigan Sweater', price: 40, category: 'women', type: 'Hoodie', img: 'https://www.monsoonlondon.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dwbb4d79f7/images/large/21_10012010007_1.jpg?sw=663&sh=848&sm=cut' },
  { id: 37, title: 'Cotton Blouse', price: 60, category: 'women', type: 'Shirt', img: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/F33436.jpg?im=Resize,width=450'},
  { id: 38, title: 'Tight Skirt', price: 40, category: 'women', type: 'Skirt', img: 'https://cdn.shopify.com/s/files/1/0293/9277/products/OliveOilIISkirt-Chocolate1_MER.jpg?v=1633735220'},
  { id: 39, title: 'Cargo Pants', price: 75, category: 'women', type: 'Trousers', img: 'https://m.media-amazon.com/images/I/71npUbrO1TL._UY1000_.jpg'},
  { id: 40, title: 'Crowl Neck Dress', price: 55, category: 'women', type: 'Dress', img: 'https://m.media-amazon.com/images/I/61dRs7EAm9L._UF894,1000_QL80_.jpg'},

  // Kids
  { id: 21, title: 'Kids Hoodie', price: 40, category: 'kids', type: 'Hoodie', img: 'https://www.mypersonalisedclothing.com/wp-content/uploads/2021/04/JH01J_LS05_2021.png' },
  { id: 22, title: 'Mini Denim Jacket', price: 55, category: 'kids', type: 'Jacket', img: 'https://www.gapcanada.ca/webcontent/0059/144/857/cn59144857.jpg' },
  { id: 23, title: 'Kids T-Shirt', price: 25, category: 'kids', type: 'T-Shirt', img: 'https://www.naturesupplyco.com/cdn/shop/products/Bee_The_Change_Kids_Cream_1365x.jpg?v=1627072548' },
  { id: 24, title: 'Kids Shorts', price: 20, category: 'kids', type: 'Shorts', img: 'https://down-ph.img.susercontent.com/file/c9e935a68eb05aa5490c20c1cdad5bfd' },
  { id: 25, title: 'Kids Leggings', price: 18, category: 'kids', type: 'Trousers', img: 'https://www.demozastores.com/cdn/shop/products/2_e736d041-cf1c-49a7-9d02-3641e439c919.jpg?v=1753461739&width=1200' },
  { id: 26, title: 'Kids Dress', price: 35, category: 'kids', type: 'Dress', img: 'https://lemonieboutique.com/cdn/shop/products/image_d575d8bb-877d-4ba1-a59e-9d75e343d5c2.jpg?v=1680431874&width=1445' },
  { id: 27, title: 'Kids Sweater', price: 30, category: 'kids', type: 'Sweater', img: 'https://cdn.shopify.com/s/files/1/0507/8112/6832/products/c311-blue--616x750.jpg' },
  { id: 28, title: 'Kids Jacket', price: 45, category: 'kids', type: 'Jacket', img: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-kids/default/dw6760a225/7344458/7344458-02-2.jpg?sw=640&sh=960&sm=fit' },
  { id: 29, title: 'Kids Polo', price: 28, category: 'kids', type: 'Shirt', img: 'https://www.mypersonalisedclothing.com/wp-content/uploads/2023/02/ss417_lifestyle_1.png' },
  { id: 30, title: 'Kids Hoodie Print', price: 42, category: 'kids', type: 'Hoodie', img: 'https://contents.mediadecathlon.com/p2794155/k$016a53e708787c5f87cb432dcfa77f37/picture.jpg' },
]

function ShopContent() {
  const [category, setCategory] = useState('all')
  const [subCategory, setSubCategory] = useState('all')
  const { cart, setCart } = useContext(CartContext) // use global cart
  const { enqueueSnackbar } = useSnackbar()

  const filteredProducts = products.filter(p => {
    const catMatch = category === 'all' || p.category === category
    const subMatch = subCategory === 'all' || p.type === subCategory
    return catMatch && subMatch
  })

  const addToCart = (product) => {
    setCart([...cart, product]) // update global cart
    enqueueSnackbar(`${product.title} added to cart`, { variant: 'success' })
  }

  const subCategories = ['all', ...Array.from(new Set(products.filter(p => p.category === category).map(p => p.type)))]

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${allura.className} text-6xl md:text-7xl text-black text-center`}
        >
          Shop Arden
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {['all', 'men', 'women', 'kids'].map(cat => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setSubCategory('all') }}
              className={`px-5 py-2 rounded-full border transition text-black ${
                category === cat ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {category !== 'all' && (
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm font-medium">
            {subCategories.map(sub => (
              <button
                key={sub}
                onClick={() => setSubCategory(sub)}
                className={`px-4 py-1 rounded-full border transition text-black ${
                  subCategory === sub ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white border"
            >
              <div className="relative w-full h-[280px]">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition duration-[1500ms]"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-base font-semibold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-500">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 p-2 rounded-full bg-black text-white hover:bg-gray-800 transition self-start"
                >
                  <FiShoppingCart size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Shop() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <ShopContent />
    </SnackbarProvider>
  )
}
