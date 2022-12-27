import { utilService } from "./util.service.js"

export const googleBookService = {
  query,
  get,
}


function query(txt = '') {
  // return axios.get
  let items = res.items.map(item => ({
    googleId: item.id,
    title: item.volumeInfo.title,
    subtitle: item.volumeInfo.subtitle,
    thumbnail: item.volumeInfo.imageLinks.thumbnail,
    listPrice: {
      amount: getRandomPrice(),
      currencyCode: 'EUR',
      isOnSale: false,
    }
  }))

  if (txt) {
    const regex = new RegExp(txt, 'i')
    items = items.filter(item => regex.test(item.volumeInfo.title))
  }

  return Promise.resolve(items)
}

function getRandomPrice() {
  return utilService.getRandomIntInclusive(20, 150)
}

function get(bookId) {
  return query().then(items => {
    const book = items.find((book) => book.googleId === bookId)
    return book
  })
}

// {
//   "id": "OXeMG8wNskc",
//   "title": "metus hendrerit",
//   "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
//   "authors": [
//     "Barbara Cartland"
//   ],
//   "publishedDate": 1999,
//   "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
//   "pageCount": 713,
//   "categories": [
//     "Computers",
//     "Hack"
//   ],
//   "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
//   "language": "en",
//   "listPrice": {
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//   }

const res = {

  "kind": "books#volumes",
  "totalItems": 315,
  "items": [
    {
      "kind": "books#volume",
      "id": "qBxhhMkSLRMC",
      "etag": "m5aQFdr9xeI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/qBxhhMkSLRMC",
      "volumeInfo": {
        "title": "Trippings in Author-land",
        "authors": [
          "Emily Chubbuck Judson"
        ],
        "publishedDate": "1846",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "HARVARD:32044019377837"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 298,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.7.7.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=qBxhhMkSLRMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=qBxhhMkSLRMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=qBxhhMkSLRMC&pg=PA98&dq=flowers+inauthor&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=qBxhhMkSLRMC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=qBxhhMkSLRMC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=qBxhhMkSLRMC&rdid=book-qBxhhMkSLRMC&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Trippings_in_Author_land.epub?id=qBxhhMkSLRMC&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "downloadLink": "http://books.google.com/books/download/Trippings_in_Author_land.pdf?id=qBxhhMkSLRMC&hl=&output=pdf&sig=ACfU3U2ecOY2qN_n_Yb4XgK-xWCBidj18g&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=qBxhhMkSLRMC&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The trees budded and leaved ; <b>flowers</b> bloomed and faded , leaving their places to brighter <b>flowers</b> still ; the brooks frolicked and jostled their tiny drops together ; and the birds answered back from ten thousand fresh green coverts&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "oAXHCgAAQBAJ",
      "etag": "qlsbycC3fts",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/oAXHCgAAQBAJ",
      "volumeInfo": {
        "title": "AngularJS for .NET Developers in 24 Hours, Sams Teach Yourself",
        "authors": [
          "Dennis Sheppard",
          "Christopher Miller",
          "AJ Liptak"
        ],
        "publisher": "Sams Publishing",
        "publishedDate": "2015-10-19",
        "description": "In just 24 sessions of one hour or less, you will be up and running with AngularJS in your Microsoft .NET environment. Using a straightforward, step-by-step approach, each lesson builds on your .NET skills and knowledge, helping you quickly learn the essentials of AngularJS, and use it to streamline any web development project. Step-by-step instructions carefully walk you through the most common questions, issues, and tasks. Q&A sections, quizzes, and exercises help you build and test your knowledge. By The Way notes present interesting pieces of information. Try it Yourself sidebars offer advice or teach an easier way to do something. Watch Out! cautions advise you about potential problems and help you steer clear of disaster. Dennis Sheppard is a Front-End Architect at NextTier Education in Chicago, IL. He has delivered enterprise solutions for the private equity, insurance, healthcare, education, and distribution industries. Christopher Miller is an Architect at West Monroe Partners. He has built solutions for the higher education, private equity, and renewable energy industries. AJ Liptak, is a Senior Consultant at West Monroe Partners specializing in modern web application development. He has delivered transformative solutions for the telecom, healthcare, finance, and distribution industries. Learn how to... Build AngularJS web apps from scratch, or integrate with existing .NET code Organize, reuse, and test JavaScript web application code far more effectively Discover key JavaScript design patterns that support AngularJS (and their similarities to C#) Use AngularJS modules, controllers, views, data-binding, and event handling Implement AngularJS services efficiently Work with directives, custom directives, and dependency injection Set up AngularJS routing Apply best practices for organizing AngularJS applications Master sophisticated AngularJS techniques, including filters, advanced patterns, and communication between controllers Deploy AngularJS code to the Microsoft Azure cloud Unit-test and debug your single page applications Integrate AngularJS with .NET Web Forms and .NET MVC Build REST APIs in .NET and consume their services in AngularJS Combine AngularJS with .NET SignalR to build real-time web apps Extend AngularJS development with bower, gulp, and webstorm Preview the future of AngularJS: Version 2.0 and beyond",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780134315058"
          },
          {
            "type": "ISBN_10",
            "identifier": "0134315057"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 400,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.3.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=oAXHCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=oAXHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=oAXHCgAAQBAJ&pg=PT123&dq=flowers+inauthor&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=oAXHCgAAQBAJ&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/AngularJS_for_NET_Developers_in_24_Hours.html?hl=&id=oAXHCgAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/AngularJS_for_NET_Developers_in_24_Hours-sample-epub.acsm?id=oAXHCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/AngularJS_for_NET_Developers_in_24_Hours-sample-pdf.acsm?id=oAXHCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=oAXHCgAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "For example, https://www.googleapis.com/books/v1/volumes? q=<b>flowers</b>+<b>inauthor</b>:keyes will search for any title containing the string “<b>flowers</b>” by an author that matches the name “keyes”, such as <b>Flowers</b> for Algernon. Hour 9."
      }
    },
    {
      "kind": "books#volume",
      "id": "Vrl13goK-VcC",
      "etag": "MvF6H82L3Es",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Vrl13goK-VcC",
      "volumeInfo": {
        "title": "How to Photograph Flowers",
        "authors": [
          "Heather Angel"
        ],
        "publisher": "Stackpole Books",
        "publishedDate": "1998",
        "description": "Heather Angel, internationally known nature photographer and author, describes equipment, film, lighting, composition, and special techniques for photographing flowers in the wild and in gardens. Straightforward explanations focus on the particular challenges of taking beautiful flower photographs, such as wind, light, and problem colors. The book also includes tips on making money from nature photography. 131 color photos.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0811724557"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780811724555"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 148,
        "printType": "BOOK",
        "categories": [
          "Photography"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.3.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Vrl13goK-VcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Vrl13goK-VcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=Vrl13goK-VcC&pg=PA20&dq=flowers+inauthor&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=Vrl13goK-VcC&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/How_to_Photograph_Flowers.html?hl=&id=Vrl13goK-VcC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/How_to_Photograph_Flowers-sample-pdf.acsm?id=Vrl13goK-VcC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Vrl13goK-VcC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "HOW TO PHOTOGRAPH <b>FLOWERS</b> 23 Water lily ( Nymphaea &quot; Attraction &quot; ) <b>in author&#39;s</b> garden pond , Surrey , England , June . Hasselblad 500 C / M , 150mm f / 4 Son- nar lens , Ektachrome 100 Plus . If a portrait of a radially symmetrical&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "Q-LQCwAAQBAJ",
      "etag": "rvzj9J+R+MM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/Q-LQCwAAQBAJ",
      "volumeInfo": {
        "title": "Freedom's Orator",
        "subtitle": "Mario Savio and the Radical Legacy of the 1960s",
        "authors": [
          "Robert Cohen"
        ],
        "publisher": "Oxford University Press",
        "publishedDate": "2009-08-27",
        "description": "Here is the first biography of Mario Savio, the brilliant leader of Berkeley's Free Speech Movement, the largest and most disruptive student rebellion in American history. Savio risked his life to register black voters in Mississippi in the Freedom Summer of 1964 and did more than anyone to bring daring forms of non-violent protest from the civil rights movement to the struggle for free speech and academic freedom on American campuses. Drawing upon previously unavailable Savio papers, as well as oral histories from friends and fellow movement leaders, Freedom's Orator illuminates Mario's egalitarian leadership style, his remarkable eloquence, and the many ways he embodied the youthful idealism of the 1960s. The book also narrates, for the first time, his second phase of activism against \"Reaganite Imperialism\" in Central America and the corporatization of higher education. Including a generous selection of Savio's speeches, Freedom's Orator speaks with special relevance to a new generation of activists and to all who cherish the '60s and democratic ideals for which Savio fought so selflessly.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780199720354"
          },
          {
            "type": "ISBN_10",
            "identifier": "0199720355"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 544,
        "printType": "BOOK",
        "categories": [
          "History"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Q-LQCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Q-LQCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=Q-LQCwAAQBAJ&pg=PA478&dq=flowers+inauthor&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=Q-LQCwAAQBAJ&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Freedom_s_Orator.html?hl=&id=Q-LQCwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Freedom_s_Orator-sample-pdf.acsm?id=Q-LQCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=Q-LQCwAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Mario Savio, “3 a.m.,” unpublished poem, October 19, 1977, copy <b>in author&#39;s</b> possession. Savio&#39;s poems are the only introspective writings ... “I believe in the coming of dead <b>flowers</b>,” unpublished poem, copy <b>in author&#39;s</b> possession. 6."
      }
    },
    {
      "kind": "books#volume",
      "id": "ytWlCgAAQBAJ",
      "etag": "Pc/bM0jOGtQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ytWlCgAAQBAJ",
      "volumeInfo": {
        "title": "Tell about Night Flowers",
        "subtitle": "Eudora Welty's Gardening Letters, 1940-1949",
        "authors": [
          "Julia Eichelberger"
        ],
        "publisher": "Univ. Press of Mississippi",
        "publishedDate": "2013-05-01",
        "description": "Tell about Night Flowers presents previously unpublished letters by Eudora Welty, selected and annotated by scholar Julia Eichelberger. Welty published many of her best-known works in the 1940s: A Curtain of Green, The Wide Net, The Robber Bridegroom, Delta Wedding, and The Golden Apples. During this period, she also wrote hundreds of letters to two friends who shared her love of gardening. One friend, Diarmuid Russell, was her literary agent in New York; the other, John Robinson, was a high school classmate and an aspiring writer who served in the Army in WWII, and he was long the focus of Welty's affection. Welty's lyrical, witty, and poignant discussions of gardening and nature are delightful in themselves; they are also figurative expressions of Welty's views of her writing and her friendships. Taken together with thirty-five illustrations, they form a poetic narrative of their own, chronicling artistic and psychic developments that were underway before Welty was fully conscious of them. By 1949 her art, like her friendships, had evolved in ways that she would never have predicted in 1940. Tell about Night Flowers not only lets readers glimpse Welty in her garden; it also reveals a brilliant and generous mind responding to the public events, people, art, and natural landscapes Welty encountered at home and on her travels during the 1940s. This book enhances our understanding of the life, landscape, and art of a major American writer.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781496800848"
          },
          {
            "type": "ISBN_10",
            "identifier": "1496800842"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 304,
        "printType": "BOOK",
        "categories": [
          "Literary Collections"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.2.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ytWlCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ytWlCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=ytWlCgAAQBAJ&pg=PT288&dq=flowers+inauthor&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=ytWlCgAAQBAJ&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Tell_about_Night_Flowers.html?hl=&id=ytWlCgAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ytWlCgAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... 2 pp EW to DR [April 20 1942] TLS 2 pp [Dated “Monday” on page 1, “Later” on page 2] [Dated April 23, 1942, by Kreyling <b>in Author</b> and Agent, but the letter replies to DR&#39;s 4.17.42 letter, and the Monday following 4.17.42 is 4.20.42.]&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "WSoiAAAAMAAJ",
      "etag": "+GN7WGV4TnI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/WSoiAAAAMAAJ",
      "volumeInfo": {
        "title": "Flowering of the Bamboo",
        "authors": [
          "William Triplett"
        ],
        "publishedDate": "1985",
        "description": "This is the story of mass murder committed in the time it takes to down two teacups of poison. With calm assurances and fatherly concern, the killer tricked twelve bank employees into orchestrating their own deaths.",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UOM:39015014604477"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 263,
        "printType": "BOOK",
        "categories": [
          "Bank robberies"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.4.4.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=WSoiAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=WSoiAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=WSoiAAAAMAAJ&q=flowers+inauthor&dq=flowers+inauthor&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=WSoiAAAAMAAJ&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Flowering_of_the_Bamboo.html?hl=&id=WSoiAAAAMAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=WSoiAAAAMAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... 204 - 209 suspected involvement in Teikoku crime , 148 , 170 - 171 , 203 , 209 , 215 , 217 wartime activities of , 70 - 71 , 93 , 140142 , 145 - 146 , 195 Shiinamachi ( train ) station : 14 , 175 - 176 , has dinner <b>in author</b> &#39; s&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "2SYhAQAAIAAJ",
      "etag": "QGVt6TmO0Fo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/2SYhAQAAIAAJ",
      "volumeInfo": {
        "title": "Catalog of Copyright Entries",
        "subtitle": "Third series",
        "authors": [
          "Library of Congress. Copyright Office"
        ],
        "publishedDate": "1951",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "STANFORD:36105006281351"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 672,
        "printType": "BOOK",
        "categories": [
          "Copyright"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.6.7.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=2SYhAQAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=2SYhAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=2SYhAQAAIAAJ&pg=RA1-PA148&dq=flowers+inauthor&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=2SYhAQAAIAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=2SYhAQAAIAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=2SYhAQAAIAAJ&rdid=book-2SYhAQAAIAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Catalog_of_Copyright_Entries.epub?id=2SYhAQAAIAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=2SYhAQAAIAAJ&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "16Apr51 ; K29040 . THE DIONNE quintette . H2094 . SEE Loomis , Andrew . DISNEY ( WALT ) PRODUCTIONS . Alice in Wonderland moets the enchanted <b>flowers</b> . ( Playing card art work ) Col. reproductions of painting . 4 x 2 in ."
      }
    },
    {
      "kind": "books#volume",
      "id": "ybt2ho-JH6QC",
      "etag": "qEzOoRzcSTM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ybt2ho-JH6QC",
      "volumeInfo": {
        "title": "Chadha",
        "subtitle": "The Story of an Epic Constitutional Struggle",
        "authors": [
          "Barbara Hinkson Craig"
        ],
        "publisher": "Univ of California Press",
        "publishedDate": "1990-03-05",
        "description": "Looks at how the case of a Kenyan student led to the ruling that the legislative veto in the Immigration and Naturalization Act is unconstitutional",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0520069552"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780520069558"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 288,
        "printType": "BOOK",
        "categories": [
          "History"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.3.8.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ybt2ho-JH6QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ybt2ho-JH6QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=ybt2ho-JH6QC&pg=PA244&dq=flowers+inauthor&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=ybt2ho-JH6QC&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Chadha.html?hl=&id=ybt2ho-JH6QC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Chadha-sample-epub.acsm?id=ybt2ho-JH6QC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Chadha-sample-pdf.acsm?id=ybt2ho-JH6QC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ybt2ho-JH6QC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Copy of Rodino letter , provided by Pohlmann , <b>in author&#39;s</b> files . 43. Deportation Hearings , pp . 9-11 . 44. ... Copy of Chadha&#39;s deportation notice <b>in author&#39;s</b> files . 51. ... ( Hereafter cited as <b>Flowers</b> Hearings . ) 3. Ibid . , p ."
      }
    },
    {
      "kind": "books#volume",
      "id": "AsM4Q8u1OgUC",
      "etag": "Fzz69HhhPV0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/AsM4Q8u1OgUC",
      "volumeInfo": {
        "title": "Library Bulletin",
        "authors": [
          "Fitchburg Public Library"
        ],
        "publishedDate": "1896",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "UIUC:30112042813524"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "categories": [
          "Catalogs, Classified"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.3.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=AsM4Q8u1OgUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=AsM4Q8u1OgUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=AsM4Q8u1OgUC&pg=RA1-PA8&dq=flowers+inauthor&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=AsM4Q8u1OgUC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=AsM4Q8u1OgUC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=AsM4Q8u1OgUC&rdid=book-AsM4Q8u1OgUC&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Library_Bulletin.epub?id=AsM4Q8u1OgUC&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=AsM4Q8u1OgUC&hl=&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "051 N2-9 Graham , P. A. Birds &#39; nesting : ( <b>In author&#39;s</b> Country pastimes . p . 1 to 100. ) 790 G Harris , A. B. How we ... Gibson , W. H. Sharp eyes : 52 weeks among insects , birds and <b>flowers</b> . 504 G3 Hook , S. L. Little people and&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "8d_fBQAAQBAJ",
      "etag": "4pA9/0Ja4qw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/8d_fBQAAQBAJ",
      "volumeInfo": {
        "title": "Secrets Of Bach Flower Remedies",
        "subtitle": "No More Emotional Booboos...Holistic Way Towards Stress Free Healthy Living",
        "authors": [
          "Dr. Ketki S. Itraj ",
          "Green Apples"
        ],
        "publisher": "Dr.Ketki S. Itraj's \" Green Apples \"",
        "publishedDate": "2014-12-19",
        "description": "Introduction: Isn’t it fabulous if you can find a remedy for your uncontrolled anger or low confidence making your troubling your personal & professional life as well? What if you can cure your kid’s behavioral issues too? Presentation & Author: This book is the perfect solution for you! Practical therapy oriented book aiming at self improvisation, personality development & stress free healthy living. Presented in attractive manner with a common man’s language to make reading this book as an enjoyable, stress free moment itself! Guidelines for counselors as well along with case oriented examples discussed in brief. It will help in Understanding various traits of human psychology, improving interpersonal relationships as concept of Batch Flower Remedies is based on personality oriented emotional fluctuations & remedies. Highly simple & communicative write-ups are highlights of Dr. Ketki’s write-ups that make it more enjoyable and practically useful in daily living for readers, this book is no exception of course! Who Should Read it? Every professional who need stress management techniques along with marketing & negotiation tactics where understanding client’s personality can really boost your success! All Doctors, Homeopaths, Alternate Medicine Practitioners, Psychologists will definitely find it useful in blending these remedies in their clinical treatment. But this is book is also for a common man; homemakers who need to live life peacefully & manage their emotional problems. And is meant for definitely Health aware people who believe in preventing diseases & inner healing of course! Let’s summarize. ----------------------------------- WHO SHOULD READ THIS BOOK? • Every “Common Man” • Customer service professionals. • IT-workers • Homemakers • Sales & Marketing professionals • Media, Film, Advertizing professionals • Banking & Insurance professionals • Entertainment professionals. • Management students & professionals. • Alternate Therapy Professionals • Practicing Batch Flower Therapists • Those who wish to become Batch flower therapists • Psychiatrists, Psychologists • Homeopaths • Counselors in all fields • HR & Recruitment professionals • Business entrepreneurs • Students pursuing higher education like MBBS/ DNB/ Other PG level • Medical Students & professionals • Freelance consultants • People aiming at high success • People troubled with emotional floods • People aiming at perfectionism • Everyone seeking stress management • Every health-aware individual • Everyone interested in “Holistic health” • Everyone attempting for prevention of diseases & healthy lifestyle ---------------------------------------------------- HOW THIS BOOK WILL HELP YOU? A. Only guide for Batch Flower Counselors B. In depth knowledge about every Batch flower personality  Plant habitat as source of medicine  Salient features of every personality  Case oriented examples  Physical problems associated with personalities  Ensures effective self use of Batch Flower remedies C. Improved work performance& relationship maintenance  Effective counseling aid for Medicos, Alternate Therapists  Improved inter-personal relationships  Improved client relationships for Entrepreneurs, management & corporate workers  Improved family, peer, personal & professional relationships D. Self improvement & personality optimization  Self improvement & optimum performance  Balancing personal & professional life  Adds grace to your personality  Approaching towards perfectionism by overcoming your drawbacks E. Stress Management & clinical benefits Effective emotional control & Stress Management for medical benefits by-  Controlling emotional worries improves social image, self esteem  Emotional stability reduces clinical risk of Lifestyle disorders Success of this Book: One will be able to identify traits to improve in personality",
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 96,
        "printType": "BOOK",
        "categories": [
          "Body, Mind & Spirit"
        ],
        "maturityRating": "MATURE",
        "allowAnonLogging": true,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=8d_fBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=8d_fBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=8d_fBQAAQBAJ&pg=PT7&dq=flowers+inauthor&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=8d_fBQAAQBAJ&dq=flowers+inauthor&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Secrets_Of_Bach_Flower_Remedies.html?hl=&id=8d_fBQAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Secrets_Of_Bach_Flower_Remedies-sample-pdf.acsm?id=8d_fBQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=8d_fBQAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... to maintaining stress free mind these medicines work miraculously. Fascinated with results, this book is an attempt to share her experience with Bach <b>Flower</b> Therapy. <b>In Author&#39;s</b> words Life is a mysterious journey where every."
      }
    }
  ]
}

