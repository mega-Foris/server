
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person_attribute CASCADE; ALTER SEQUENCE person_attribute_id_seq restart with 31')
    .then(function () {
      // Inserts seed entries
      return knex('person_attribute').insert([
        {
          id:1,
          person_id: 1,
          attribute_id: 1,
          value: 'https://pbs.twimg.com/media/C89QtDzV0AAIMve.jpg'
        },
        {
          id:2,
          person_id: 1,
          attribute_id: 2,
          value: '1986'
        },
        {
          id:3,
          person_id: 1,
          attribute_id: 3,
          value: 'biking'
        },
        {
          id:4,
          person_id: 2,
          attribute_id: 1,
          value: 'https://s3.amazonaws.com/pq-imgs/images/bios/kristen-johnston.j-11349.jpg'
        },
        {
          id:5,
          person_id: 2,
          attribute_id: 2,
          value: '1995'
        },
        {
          id:6,
          person_id: 2,
          attribute_id: 3,
          value: 'kayaking'
        },
        {
          id:7,
          person_id: 3,
          attribute_id: 1,
          value: 'http://cdnak1.psbin.com/img/mw=300/cr=n/d=jbf18/yy2zjwqv59zlzy63.jpg'
        },
        {
          id:8,
          person_id: 3,
          attribute_id: 2,
          value: '1991'
        },
        {
          id:9,
          person_id: 3,
          attribute_id: 3,
          value: 'climbing'
        },
        {
          id:10,
          person_id: 4,
          attribute_id: 1,
          value: 'http://cdnak1.psbin.com/img/mw=300/cr=n/d=jbf18/yy2zjwqv59zlzy63.jpg'
        },
        {
          id:11,
          person_id: 4,
          attribute_id: 2,
          value: '1992'
        },
        {
          id:12,
          person_id: 4,
          attribute_id: 3,
          value: 'climbing'
        },
        {
          id:13,
          person_id: 5,
          attribute_id: 1,
          value: 'https://static1.squarespace.com/static/51773f51e4b054c7ac3739b7/t/55665b32e4b0194f00fc5e39/1432771379131/Ian+Somerhalder+Bradford+Rogne+Headshots+Los+Angeles.jpg?format=original'
        },
        {
          id:14,
          person_id: 5,
          attribute_id: 2,
          value: '1990'
        },
        {
          id:15,
          person_id: 5,
          attribute_id: 3,
          value: 'hiking'
        },
        {
          id:16,
          person_id: 6,
          attribute_id: 1,
          value: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAQbAAAAJDA2YTdiZmJhLTBmOWQtNDdlZC1hMzc3LWQyYmY3ZDZmOTNkMQ.jpg'
        },
        {
          id:17,
          person_id: 6,
          attribute_id: 2,
          value: '1989'
        },
        {
          id:18,
          person_id: 6,
          attribute_id: 3,
          value: 'climbing'
        },
        {
          id:28,
          person_id: 7,
          attribute_id: 1,
          value: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAApSAAAAJDYxYWMyYzJkLTBmNTAtNDMxZi04NzVlLTUzMzk3ZmE3Mjk2Mg.jpg'
        },
        {
          id:29,
          person_id: 7,
          attribute_id: 2,
          value: '1989'
        },
        {
          id:30,
          person_id: 7,
          attribute_id: 3,
          value: 'biking'
        },
        {
          id:19,
          person_id: 8,
          attribute_id: 1,
          value: 'https://pbs.twimg.com/profile_images/656239056972587008/JUfjuyIc.jpg'
        },
        {
          id:20,
          person_id: 8,
          attribute_id: 2,
          value: '1989'
        },
        {
          id:21,
          person_id: 8,
          attribute_id: 3,
          value: 'biking'
        },
        {
          id:22,
          person_id: 9,
          attribute_id: 1,
          value: 'http://runnerstribe.website/wp-content/uploads/2015/10/Catherine_Miller_NSWAS.jpg'
        },
        {
          id:23,
          person_id: 9,
          attribute_id: 2,
          value: '1994'
        },
        {
          id:24,
          person_id: 9,
          attribute_id: 3,
          value: 'hiking'
        },
        {
          id:25,
          person_id: 10,
          attribute_id: 1,
          value: 'https://pbs.twimg.com/profile_images/378800000485466255/2b3e4b97bb220c762184a7cd086f45b2.jpeg'
        },
        {
          id:26,
          person_id: 10,
          attribute_id: 2,
          value: '1980'
        },
        {
          id:27,
          person_id: 10,
          attribute_id: 3,
          value: 'climbing'
        }
      ]);
    });
};
