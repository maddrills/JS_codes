const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true,
      printBookInfo : function({title = ' ', author = ' ', year = ' Unkown'}){
        console.log(`The Todays Show With ${title}, ${author}, ${year}`)}
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];

//destructing arrays
  //first and second
  const[firstBook, secondBook] = books;
  console.log(`First Book: ${firstBook} and second book ${secondBook}`);

  //skip first and second
  const[,,thirsdBook] = books;
  console.log(`thirdBook is : ${thirsdBook}`);

  const ratingz = books[books.length - 1];
  console.log(ratingz);

  const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

  const [[,val1],[,val2]] = ratings;

  console.log(val1, val2);

  const ratingStars = [63405, 1808];

//distructing objects 

  const [rating1 = 0,rating2 = 0,rating3 = 0] = ratingStars;
  console.log(rating3,rating1);

  const {title,author, ISBN} = books[0];
  console.log(title, author, ISBN);

  //distroy the array then the object in which resides keywords array then reasign to title
  const {
    keywords : tags,
  } = books[0];
  console.log(tags);

  //making a new non existing field programmingLanguage that isent a field in books
  const {language, programmingLanguage = 'Unkown'} = books[6];
  console.log(language);

  let bookTitle = 'unknown';
  let bookAuthor = 'unknown';

  //new value reasigned 
  ({title : bookTitle, author : bookAuthor} = books[0]);

  console.log(books[0].title)


//unreated
  const jasica = {
    fname : 'jes',
    age : 23
  }


  let person = jasica;

  console.log(person);

  person.fname = 'sdasd';

  console.log(person);
  console.log(jasica.fname);

  //this to create a coppy of an object
  const newperson = Object.assign({},jasica);


  //inned object destructure for object in an object
  //rember ratingR is just an alies {} is object destructuring if ratingR is a variable that value will be asigned 
  const {thirdParty : {goodreads : {rating : ratingR}}} = books[0];
  console.log(ratingR);


  //object parameter destructure 
  books[0].
  printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

  books[0].printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });






  //spread 
  console.log('-'.repeat(20),'spread o/p','-'.repeat(20));

  const spread = [...books[0].author, ...books[1].author];
  console.log(spread);
  //(5) ['Robert Sedgewick', 'Kevin Wayne', 'Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)']

  function spellWord1(word){

    console.log(...word);
    console.log(word);
    // J a v a S c r i p t
    // JavaScript
  }
  spellWord1('JavaScript');



  //
  //
  //
  function spellWord5(word){

    console.log(word);//5
  }
  spellWord5(5,2,3,4,5);// JavaScript

  function spellWord2(word){

    console.log(word);// J
  }
  spellWord2(...'JavaScript');// JavaScript
  //
  //
  //



  function spellWord3(...word){

    console.log(word);
    //(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
  }
  spellWord3(...'JavaScript');// j a v a s c r i p t 


  function spellWord4(...word){

    console.log(word);
    //(1) ['JavaScript']
  }
  spellWord4('JavaScript');// JavaScript




