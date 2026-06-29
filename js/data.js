// ══════════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════════
var NAV_PAGES = [
  { label: 'Home',                           hash: '#/' },
  { label: 'Accessibilities & Treatment',    hash: '#/accessibilities' },
  { label: 'Calendar',                       hash: '#/calendar' },
  { label: 'Corrections',                    hash: '#/corrections' },
  { label: 'CPC',                            hash: '#/cpc' },
  { label: 'Grapevine',                      hash: '#/grapevine' },
  { label: 'Public Information',             hash: '#/public-information' },
  { label: 'Resources – AA',                 hash: '#/resources-aa' },
  { label: 'Resources – District 24',        hash: '#/resources-d24' },
  { label: 'Treasury',                       hash: '#/treasury' },
  { label: 'Workshops',                      hash: '#/workshops' },
];

var NAV_GROUPS = [
  { label: 'All Groups in District 24',      hash: '#/groups' },
  { label: '164 and More',                   hash: '#/group-164' },
  { label: 'Saturday Step Meeting',          hash: '#/group-saturday-step' },
  { label: "Women's Big Book Meeting",       hash: '#/group-womens-big-book' },
];

// ══════════════════════════════════════════════════════════════
//  HOME PAGE — SERVICE POSITIONS
// ══════════════════════════════════════════════════════════════
var SERVICE_POSITIONS = [
  { pos: 'Accessibilities',   name: 'Julie S',         email: null,                    term: '2026-27' },
  { pos: 'Corrections',       name: 'Abbe M & Gary B', email: null,                    term: '2026-27' },
  { pos: 'CPC',               name: 'Tom K',           email: 'tomkopka@wi.rr.com',    term: '2025-26' },
  { pos: 'DCM',               name: 'Jeff M',          email: 'jeffmay7787@att.net',   term: '2025-26' },
  { pos: 'Grapevine',         name: 'Bob H',           email: 'rehackettiii@me.com',   term: '2025-26' },
  { pos: 'Public Information',name: 'Jess G',          email: 'j94830412@gmail.com',   term: '2026-27' },
  { pos: 'Secretary',         name: 'Megan N',         email: 'megneisius@gmail.com',  term: '2026-27' },
  { pos: 'Technology',        name: 'Mike L',          email: 'mike.mke.wi@gmail.com', term: '2025-26' },
  { pos: 'Treasurer',         name: 'Allison D',       email: 'adozark@gmail.com',     term: '2026-27' },
];

// ══════════════════════════════════════════════════════════════
//  HOME PAGE — UPCOMING EVENTS
// ══════════════════════════════════════════════════════════════
var UPCOMING_EVENTS = [
  { isoDate: '2026-09-13', label: 'Area 75 Pre-Conference Assembly', link: null },
  { isoDate: '2026-11-06', label: 'Area 75 Conference',             link: null },
];

// ══════════════════════════════════════════════════════════════
//  WORKSHOPS PAGE — HISTORY
// ══════════════════════════════════════════════════════════════
var WORKSHOPS = [
  { year: '2026', text: 'Spring Workshop • UNITY IN ACTION • Tradition 3', link: 'https://drive.google.com/file/d/1dLLLBAwEnDrselLSo8E6fMVAWRpbxgiV/view' },
  { year: '2025', text: 'WORKING YOUR PROGRAM – PART 1: Welcome remarks, member shares, breakout sessions on Sponsorship, Tools, and Prayer/Meditation/Yoga.' },
  { year: '2024', text: 'PATHS TO RECOVERY: Speakers on the revolving door, emotional relapse, and service as a path to long-term sobriety. Speaker panel.' },
  { year: '2023', text: 'How do the Promises of Recovery come true? Three legacies – Recovery, Unity, and Service.' },
  { year: '2022', text: 'Trust God / Clean House / Help Others · Sponsorship' },
  { year: '2019', text: 'Principles, Promises & Prayers – Steps 8-12 · Emotional Sobriety 2' },
  { year: '2018', text: 'Surrender · Principles, Promises & Prayers – Steps 1-7' },
  { year: '2017', text: 'Clearing Away the Wreckage – Lead by Taylor M · Keys to Sobriety – speaker Kerry Y and panel' },
  { year: '2016', text: 'Get Inspired! recharge, service, meetings, gratitude, sponsor, WICYPAA, Fun & Social/Media · Potpourri Panel & Speakers' },
  { year: '2015', text: 'History / Acceptance / Customs – Traditions' },
  { year: '2014', text: 'Three Legacies of Recovery, Unity and Service' },
  { year: '2013', text: 'Working with Others (sponsorship and service)' },
  { year: '2012', text: 'Emotional Sobriety' },
  { year: '2011', text: 'How it Works at the Group Level (traditions)' },
  { year: '2010', text: 'Spirituality – Step 2/3 · NDC Sponsored: Sponsorship through the 12 Steps' },
  { year: '2009', text: 'Step 4 (at 24 hour Club)' },
  { year: '2008', text: 'Step 6/7 Panel · Step 11 with a focus on Meditation' },
];

// ══════════════════════════════════════════════════════════════
//  ALL GROUPS PAGE — MEETINGS LIST
// ══════════════════════════════════════════════════════════════
var DAYS_ORDER = ['All', 'Online Available', 'Daily', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ══════════════════════════════════════════════════════════════
//  ALL GROUPS PAGE — MEETINGS CODES LIST
// ══════════════════════════════════════════════════════════════
var MEETING_CODES = [
  {ID: "code14", Value: "WB", Label: "Online Available"},
  {ID: "code01", Value: "A", Label: "Agnostics"},
  {ID: "code02", Value: "*", Label: "Al-Anon also meets"},
  {ID: "code04", Value: "B", Label: "Beginner's Class"},
  {ID: "code05", Value: "CC", Label: "Child Care Available"},
  {ID: "code06", Value: "DD", Label: "Dual Diagnosis"},
  {ID: "code07", Value: "G", Label: "Gay/Lesbian"},
  {ID: "code08", Value: "W", Label: "Handicap Access"},
  {ID: "code09", Value: "L", Label: "Ladies/Women"},
  {ID: "code10", Value: "M", Label: "Men's"},
  {ID: "code11", Value: "I", Label: "Native American"},
  {ID: "code15", Value: "PO", Label: "Polish Interpreter Available"},
  {ID: "code16", Value: "P", Label: "Professionals"},
  {ID: "code17", Value: "ASL", Label: "ASL Interpreter"},
  {ID: "code18", Value: "S", Label: "Spanish Speaking"},
  {ID: "code19", Value: "O", Label: "Weekly/Monthly Open Meeting"},
  {ID: "code20", Value: "Y", Label: "Young People Welcome"},
]

var ALL_MEETINGS = [
  {name: "It's Six O'clock Somewhere Online Daily",id: "8131554111",day: "Daily",time: "6:00 PM",location: "Virtual",street: null,city: null,state: null,zip: null,notes: null,codes: [ "WB" ],zoom_id: "813 155 4111",zoom_passcode: "3Recovery5",zoom_url: "http://us06web.zoom.us/j/8131554111",motm: null},
  {name: "Upon Awakening Mon-Sat",id: "18068",day: "Monday",time: "6:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "24 Hr Club Mon Morning/Topic",id: "141454",day: "Monday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensvlle",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Thank God It's Mon (TGIM)",id: "87183",day: "Monday",time: "12:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "More About Alcoholism",id: "31912",day: "Monday",time: "5:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "WOMEN'S BIG BOOK HYBRID",id: "35432",day: "Monday",time: "6:00 PM",location: "CHRIST CHURCH",street: "13460 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "L", "WB", "W" ],zoom_id: "810 3560 7580",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/81035607580?pwd=vwUr5wbDbbDQgXbLYFb9dSwOlShbUp.1",motm: null},
  {name: "24 Hr Club Mon Night Men's",id: "118521",day: "Monday",time: "8:00 PM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "M" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Mon Night Mequon Men's Gp",id: "24789",day: "Monday",time: "8:15 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "M", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Upon Awakening Mon-Sat",id: "18068",day: "Tuesday",time: "6:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "Tue Morn Gp 10:00 AM",id: "13250",day: "Tuesday",time: "10:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hr Club Tue 10a Step/Topic",id: "20791",day: "Tuesday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Tue 5:30 pm Big Book",id: "12549",day: "Tuesday",time: "5:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hr Club Tue 5:30p Big Book",id: "OZK-T4",day: "Tuesday",time: "5:30 PM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "New To Sobriety Group",id: "508984",day: "Tuesday",time: "7:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: "Beginner class, newcomers welcome",codes: [ "B", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Cedarburg Tue AA Group",id: "98489",day: "Tuesday",time: "7:00 PM",location: "Advent Lutheran Church",street: "W63N642 Washington Av",city: "Cedarburg",state: "WI",zip: "53012",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Upon Awakening Mon-Sat",id: "18068",day: "Wednesday",time: "6:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "Wed a.m. Gp",id: "27029",day: "Wednesday",time: "10:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "W1",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hr Club Big Book",id: "OZK-W1",day: "Wednesday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: "Topic meeting",codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Promises Group 12:30 P.M.",id: "119760",day: "Wednesday",time: "12:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Women's Wed 5:15 P.M. Zoom Meeting",id: "38368",day: "Wednesday",time: "5:15 PM",location: "Virtual",street: null,city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB", "L" ],zoom_id: "860 8297 7127",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/86082977127?pwd=MhMy8KmIbbphJZktpydP81txorUQEG.1",motm: null},
  {name: "Wed 5:30 PM Step Gp",id: "26977",day: "Wednesday",time: "5:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Women's Recovery Group",id: "OZK-W2",day: "Wednesday",time: "5:30 PM",location: "Unitarian North Church",street: "13800 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "L", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Wed Night Women's Lifeline Gp",id: "26732",day: "Wednesday",time: "7:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "L", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "#069 Wed pm",id: "28094",day: "Wednesday",time: "8:00 PM",location: "Grand Ave United Methodist",street: "505 W Grand Ave",city: "Port Washington",state: "WI",zip: "53074",notes: "Family Activity Center",codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Upon Awakening Mon-Sat",id: "18068",day: "Thursday",time: "6:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "Thiensville Thr Morning Big Book",id: "38460",day: "Thursday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: "Big Book Meeting",codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Thr AM Gp 10:00 AM",id: "6883",day: "Thursday",time: "10:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Village Pointe Commons Thursday",id: "OZK-R5",day: "Thursday",time: "10:00 AM",location: "Village Pointe Commons",street: "1953 Wisconsin Ave",city: "Grafton",state: "WI",zip: "53024",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Women's Spirituality Gp",id: "37717",day: "Thursday",time: "1:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: "In-person Online",codes: [ "L", "W", "WB" ],zoom_id: "852 4085 8537",zoom_passcode: "987 654",zoom_url: "http://us06web.zoom.us/j/85240858537",motm: null},
  {name: "Online Women's AA Gp",id: "852408585",day: "Thursday",time: "1:00 PM",location: "Virtual",street: null,city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "L", "WB", "W" ],zoom_id: "852 4085 8537",zoom_passcode: "987 654",zoom_url: "http://us06web.zoom.us/j/85240858537",motm: null},
  {name: "24 Hr Club Thr 5:30p Step/Topic",id: "OZK-R2",day: "Thursday",time: "5:30 PM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Thr 5:30 pm Topic",id: "OZK-R7",day: "Thursday",time: "5:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "It Works If You Work It",id: "112127",day: "Thursday",time: "6:30 PM",location: "Grace Lutheran Church",street: "715 6th Ave",city: "Grafton",state: "WI",zip: "53024",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "164 and More, Topic Hybrid meeting",id: "90603",day: "Thursday",time: "6:30 PM",location: "Peltz Center for Jewish Life",street: "2233 W Mequon Rd",city: "Mequon",state: "WI",zip: "53092",notes: "Weinberg Social Hall",codes: [ "WB" ],zoom_id: "819 3349 7892",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/81933497892?pwd=3ZZT47GwJ19LENZUSnbeKW365Q9QYn.1",motm: null},
  {name: "Saukville Big Book Meeting",id: "65294",day: "Thursday",time: "7:00 PM",location: "Living Hope Lutheran Church .",street: "851 W Dekora St",city: "Saukville",state: "WI",zip: "53080",notes: "enter off Hwy 33",codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Upon Awakening Mon-Sat",id: "18068",day: "Friday",time: "6:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "Fri Morn Gp (10 AM)",id: "105864",day: "Friday",time: "10:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hr Club Fri/Step/12&12",id: "115907",day: "Friday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Fri 12 & 12 Gp",id: "91063",day: "Friday",time: "5:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: "Steps and Traditions",codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Belgium Step Topic",id: "95274",day: "Friday",time: "6:30 PM",location: "St Mark Lutheran Church",street: "200 Park St",city: "BELGIUM",state: "WI",zip: "53004",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hr Club Fri Night Step",id: "105699",day: "Friday",time: "8:00 PM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Friday Frequent Flyers Meeting Online",id: "OZK-F2",day: "Friday",time: "8:00 PM",location: null,street: null,city: "Mequon",state: "WI",zip: null,notes: null,codes: [ "WB" ],zoom_id: "851 9219 9031",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85192199031?pwd=35gfpPL3A7pTaAJPsFobScFNOcYCDa.1",motm: null},
  {name: "Upon Awakening Mon-Sat",id: "18068",day: "Saturday",time: "6:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "Big Book and 12 Steps Gp",id: "13139",day: "Saturday",time: "8:30 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "844 4566 9750",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/84445669750?pwd=i9ZU9FfI2ao742XoL6ZFdtPfbly5wd.1",motm: null},
  {name: "Step Meeting Zoom and In person",id: "316274",day: "Saturday",time: "8:30 AM",location: "Lumen Christi Catholic Church",street: "2750 W Mequon Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W", "WB" ],zoom_id: "864 2300 7839",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/86423007839?pwd=TzaGeBalHhPlfb96RfkDQ0dpW70ERG.1",motm: null},
  {name: "Keep It Simple Men's",id: "4967",day: "Saturday",time: "8:30 AM",location: "Advent Lutheran Church    .",street: "W63N642 Washington Ave",city: "Cedarburg",state: "WI",zip: "53012",notes: null,codes: [ "M" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Saturday 10AM Zoom Online Meeting",id: "424553",day: "Saturday",time: "10:00 AM",location: null,street: "Mequon",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "776 446 095",zoom_passcode: "no password",zoom_url: "http://us06web.zoom.us/j/776446095",motm: null},
  {name: "24 Hr Club Sat 10:00a Big Book",id: "44807",day: "Saturday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Sat Morn Gp (10 AM)",id: "63147",day: "Saturday",time: "10:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Fellowship of the Spirit Steps",id: "104159",day: "Saturday",time: "5:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Sat Night Feelings Gp",id: "72976",day: "Saturday",time: "7:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hr Club 1st Sat Monthly Open",id: "OZK-A2",day: "Saturday",time: "7:00 PM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensvlle",state: "WI",zip: "53092",notes: "Open meeting 1st Saturday only",codes: [ "O" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "New Day Club Monthly Open Meeting",id: "OZK-A5",day: "Saturday",time: "7:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: "Open meeting 3rd Saturday only",codes: [ "O", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Pizza Not Perfection Young People",id: "49731",day: "Saturday",time: "10:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: "Primarily young people, all are welcome",codes: [ "Y", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Sun Morning Meeting 8:00 A.M.",id: "83994",day: "Sunday",time: "8:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "24 Hour Sun 8:00 AM Gp",id: "OZK-S4",day: "Sunday",time: "8:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Upon Awakening Sunday",id: "18068",day: "Sunday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [ "WB" ],zoom_id: "851 8190 6265",zoom_passcode: "District24",zoom_url: "https://us06web.zoom.us/j/85181906265?pwd=rRNLmYupMQIFGbT628SYnczIQDekSf.1",motm: null},
  {name: "#134 Serenity Seekers",id: "68228",day: "Sunday",time: "10:00 AM",location: "24 Hour Club",street: "153 Green Bay Rd",city: "Thiensville",state: "WI",zip: "53092",notes: null,codes: [  ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Sun Morn Gp 11:00 AM",id: "83925",day: "Sunday",time: "11:00 AM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Big Book Study Gp.",id: "20795",day: "Sunday",time: "5:00 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: "Young people, all are welcome",codes: [ "Y", "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null},
  {name: "Sun Night Topic Gp 7:30 PM",id: "84705",day: "Sunday",time: "7:30 PM",location: "New Day Club",street: "11936 N Port Washington Rd",city: "Mequon",state: "WI",zip: "53092",notes: null,codes: [ "W" ],zoom_id: null,zoom_passcode: null,zoom_url: null,motm: null}
];


// ══════════════════════════════════════════════════════════════
//  164 AND MORE — UPCOMING LEADS
// ══════════════════════════════════════════════════════════════
var LEADS_164 = [
  ['June 18', 'Bob A.'],
  ['June 25', 'Nick P.'],
  ['July 02', 'Bill W. (OOA)'],
  ['July 09', 'Brian K.'],
  ['July 16', 'Nathan M.'],
  ['July 23', 'Allison D.'],
  ['July 30', 'Roger B.'],
  ['August 06', 'Ellen G. (00A)'],
  ['August 13', 'Open Speaker Meeting – Brian K. and Kay A.'],
  ['August 20', 'Mike L.'],
  ['August 27', 'Sam H.'],
  ['September 03', 'Fran P. (OOA)'],
  ['September 10', 'Liz G.'],
  ['September 17', 'Jess G.'],
  ['September 24', 'Tim Mc.'],
  ['October 01', 'Karen T. (OOA)'],
  ['October 08', '- TBD -'],
  ['October 15', 'Irene S'],
  ['October 22', 'Dave H.'],
  ['October 29', 'Open Speaker Meeting'],
];

// ══════════════════════════════════════════════════════════════
//  SATURDAY STEP MEETING — UPCOMING LEADS
// ══════════════════════════════════════════════════════════════
var LEADS_SATURDAY_STEP = [
  ['June 27', 'Katie C',              'Step 3'],
  ['July 04', 'Britta E',                'Step 4'],
  ['July 11', 'Karen T',              'Step 5'],
  ['July 18', 'Jeff M',               'Tradition 7'],
  ['July 25', 'Beth M',               'Step 6'],
  ['August 01', 'Dan G',              'Step 7'],
  ['August 08', 'Megan A',            'Step 8'],
  ['August 15', 'Serena P',           'Tradition 8'],
  ['August 22', 'Dana R',             'Step 9'],
  ['August 29', 'Sarah M',            'Step 10'],
];

// ══════════════════════════════════════════════════════════════
//  WOMEN'S BIG BOOK — QUARTERLY SPEAKERS
// ══════════════════════════════════════════════════════════════
var SPEAKERS_WOMENS_BIG_BOOK = [
  { date: 'September 2026',  type: 'Open Speaker Meeting',   speaker: 'TBD' },
];
