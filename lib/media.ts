/**
 * Semantic names for the media in /public/media, mapped from the asset roles
 * captured off the reference template (see scratchpad/harvest/*.json).
 */
const m = (f: string) => `/media/${f}`;

export const media = {
  heroVideo: m("hero.mp4"),
  heroPoster: m("hero-poster.jpg"),

  // Solution card thumbnails
  precisionFarming: m("VJEQ90eoeZmQA4nFDsiTPJTO2yI.jpeg"),
  sustainableIrrigation: m("ITj0m4cojCl5KTS5ctOJgWN8uvg.jpg"),
  supplyChain: m("zeoPYx06jCmlnLFcwMNcJHRRU.jpg"),

  // Sustainability split section
  sustainability: m("kTTxNuTmZ5aFkmvNBmn4O7JDGw0.jpeg"),

  // "Why choose us" tilted cards
  hand: m("uzgRSkoTxBhhqj1WH6jplWzmIM.jpeg"),
  farmer: m("MZ0nNEuTCFK4QAjsPqmkumSNU.jpeg"),
  vegetables: m("L778rsxvyqbTANOBLwkeCv6UUzk.jpeg"),

  // Founder / quote panel
  founder: m("3Ds9cBFGmZJoImtcMgQqe3z6HA.jpeg"),

  // Page banners
  bannerTeam: m("NHQgmqW1RcoerG9Ey35pw7Ik9LU.jpg"),
  bannerAbout: m("HTCxbtzQLbckykWOh7EGkWRnSB0.jpg"),
  bannerBlog: m("612wNVfu30qJ0wlB8BXE0oj8dI.jpg"),
  bannerWide: m("xlc0DOt5Dx6MjEsLkGfLdLxr9gI.jpg"),
  fieldWide: m("xhSsrYi10FiNV46Znp9A2Dr64.jpg"),
  fieldTall: m("dL8Nv4bDpfqS2psbogXQHOJvcB4.jpeg"),
  plants: m("55ztvcOflZ8wp3jMqlnOPwI0.jpeg"),

  team: [
    m("HnPLse0ckrjYsTzLf7Db2QH8D4.jpg"),
    m("1KJx6q3nUrTOJYfYvryo1U0.jpg"),
    m("xMOgS0tSwa3YDVV9qgvQh69Xjtc.jpg"),
    m("aoX5CgQRFYqd29fhsLVd14sVQI.jpg"),
    m("lInx76RfddpXsay3PXp6MqjnZws.jpg"),
    m("zL5gm7kvxD35zglstWnnZOnIMI.jpg"),
    m("rOrYdVuNOZtr1tHJy06NqdbNzYk.jpg"),
    m("3PyGgTSHQIC7SDj6SQHatdTH74E.jpg"),
  ],

  gallery: [
    m("ugZkAwezwEFvaVvqOdHcnbt4Fk4.jpg"),
    m("HTCxbtzQLbckykWOh7EGkWRnSB0.jpg"),
    m("fnuOYPQRAUIWKkgEh310v4QoGxE.jpg"),
    m("9X7swXzMzQs0K6j4CDFqVFBOOqY.jpg"),
    m("xhSsrYi10FiNV46Znp9A2Dr64.jpg"),
    m("xlc0DOt5Dx6MjEsLkGfLdLxr9gI.jpg"),
    m("6uhA9nT0wvnH7HwKv2Hhb3oC2Ts.jpg"),
  ],

  blog: [
    m("EFD6cyMVNldERpCQYxlkTWirGVE.jpg"),
    m("gOX9dC8laWlozJ4qgVlrpIfRus.jpg"),
    m("Vl9Xyxlivf4vqUxOWAcj3mnhs8U.jpg"),
    m("qCyCAmhxlV57seEY1QBty9FvE.jpg"),
    m("6URqoGebEzB3NjyFNs5MpYsZseA.jpg"),
    m("VMUywOhKNsGCYSx01cpQVToqTU.jpg"),
  ],

  avatars: [
    m("92WRhs9yNlwqtI8Lsf1CXUYbsQ.jpg"),
    m("SNO9CJ50K7g0mXRMMvJ5XyI6A.jpg"),
    m("PVWvTlfEBwdlrEEObkNsdsqAf74.jpg"),
    m("WwZxz2TLSkaE5RbjBIXh2xpE.jpg"),
    m("2So1vuQODWfoGjcD2QlDcnvdI.jpg"),
    m("RY5Y6YYHERyFpHQ88xElsl1Eyo.jpg"),
    m("nPLJQVl627UHDtCtA7NrPdpSCU.jpg"),
    m("L2xtjraEqDxMOFKW9dsPghAxd4.jpg"),
  ],
};
