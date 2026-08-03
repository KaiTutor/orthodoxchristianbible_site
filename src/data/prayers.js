// All prayer categories and their prayers.
// Adding a category here automatically creates its page, adds it to the
// /prayers/ index, and includes it in the sitemap. No code changes needed.
//
// `order` controls display order on the index page.

export const PRAYER_CATEGORIES = [
  {
    slug: 'trisagion',
    name: 'Trisagion Prayers',
    order: 1,
    description:
      'The opening prayers that begin the Orthodox prayer rule: O Heavenly King, the Trisagion, the Lord\u2019s Prayer, and the Psalm of Repentance.',
    prayers: [
      {
        title: 'O Heavenly King',
        text: `In the Name of the Father, and of the Son, and of the Holy Spirit. Amen.

Glory to Thee, our God, glory to Thee!

O Heavenly King, the Comforter, the Spirit of Truth, Who art everywhere and fillest all things; Treasury of Blessings, and Giver of Life — come and abide in us, and cleanse us from every impurity, and save our souls, O Good One.`,
      },
      {
        title: 'Trisagion',
        text: `Holy God! Holy Mighty! Holy Immortal! Have mercy on us. (3x)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

O most Holy Trinity, have mercy on us. O Lord, cleanse us from our sins. O Master, pardon our transgressions. O Holy One, visit and heal our infirmities, for Thy name's sake.

Lord, have mercy. (3x)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.`,
      },
      {
        title: 'Our Father',
        text: `Our Father, Who art in Heaven, hallowed be Thy name. Thy Kingdom come; Thy will be done, on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.

Lord, have mercy. (12x)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

Come! Let us worship God, our King! Come! Let us worship and fall down before Christ, our King and our God! Come! Let us worship and fall down before Christ Himself, our King and our God!`,
      },
      {
        title: 'A Psalm of Repentance (Psalm 51)',
        text: `Have mercy on me, O God, according to Thy steadfast love; according to Thy abundant mercy, blot out my transgressions. Wash me thoroughly from my iniquity and cleanse me from my sin!

For I know my transgressions and my sin is ever before me. Against Thee, Thee only, have I sinned, and done that which is evil in Thy sight, so that Thou art justified in Thy sentence and blameless in Thy judgment.

Behold! I was brought forth in iniquity and in sin did my mother conceive me. Behold! Thou desirest truth in the inward being; therefore teach me wisdom in my secret heart.

Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow. Fill me with joy and gladness; let the bones which Thou hast broken rejoice. Hide Thy face from my sins and blot out all my iniquities.

Create in me a clean heart, O God, and put a new and right spirit within me. Cast me not away from Thy presence and take not Thy Holy Spirit from me. Restore to me the joy of Thy salvation and uphold me with a willing Spirit.

Then I will teach transgressors Thy ways and sinners will return to Thee. Deliver me from bloodguiltiness, O God, Thou God of my salvation, and my tongue will sing aloud of Thy deliverance.

O Lord, open Thou my lips, and my mouth shall show forth Thy praise. For Thou hast no delight in sacrifice; were I to give a burnt offering, Thou wouldst not be pleased. The sacrifice acceptable to God is a broken spirit; a broken and contrite heart, O God, Thou wilt not despise.

Do good to Zion in Thy good pleasure; rebuild the walls of Jerusalem. Then wilt Thou delight in right sacrifices, in burnt offerings and whole burnt offerings; then bulls will be offered on Thy altar.`,
      },
    ],
  },

  {
    slug: 'morning',
    name: 'Morning Prayers',
    order: 2,
    description:
      'Prayers on rising: to the Holy Trinity, to the Father, to the Theotokos, to the Guardian Angel, and to one\u2019s patron saint.',
    prayers: [
      {
        title: 'To the Holy Trinity',
        text: `Having arisen from sleep, we fall down before Thee, O Blessed One, and sing to Thee, O Mighty One, the angelic hymn: Holy! Holy! Holy! art Thou, O God; through the Theotokos, have mercy on us.

Glory to the Father, and to the Son, and to the Holy Spirit.

Do Thou, O Lord, Who hast raised me from my bed and from sleep, enlighten my mind and heart, and open my lips that I may praise Thee, O Holy Trinity: Holy! Holy! Holy! art Thou, O God; through the Theotokos, have mercy on us.

Now and ever and unto ages of ages. Amen.

The Judge will come suddenly and the acts of every man will be revealed; but with fear we cry in the middle of the night: Holy! Holy! Holy! art Thou, O God; through the Theotokos, have mercy on us.`,
      },
      {
        title: 'To the Father',
        text: `O Lord Almighty, God of hosts and of all flesh, dwelling in the highest, caring for the humble, searching the reins and the heart, and clearly discerning the hidden things of men — O unoriginate and ever-existing Light, with whom there is no variation or shadow due to change, do Thou, O immortal King, accept our prayers which we offer to Thee at this present time from our soiled lips, trusting in the multitude of Thy bounties — forgive us our transgressions which we have committed knowingly or unknowingly, whether in word or deed or thought; cleanse us from all stain of body and soul.

Grant us to pass through all the night of this present life with vigilant heart and sober thought, awaiting the coming of the radiant and manifest Day of Thy only-begotten Son, our Lord and God and Savior Jesus Christ, on which the judgment of all men shall come with glory, when to each man shall be given the reward of his deeds.

May we not fall and become lazy, but instead have courage that, being roused to action, we may be found ready to enter into the joy and the divine bride-chamber of His glory, where the voice of those who feast is unceasing, and the gladness of those who behold the goodness of Thy countenance is unending. For Thou art the True light Who enlightenest and sanctifiest all things, and all creation sings Thy praise forever. Amen.`,
      },
      {
        title: 'To the Theotokos',
        text: `I sing the praises of your grace, O Lady, entreating you to enrich my mind with grace! Teach me to walk uprightly, in the way of Christ's commandments. Strengthen my vigilance in song and prayer, which drive away the despair of sleep. Free me by your entreaties, O Bride of God, who am bound by sinful garments. Protect me in the night and in the day, delivering me from the enemies who contend against me.

Give life to me who have been deadened by passion, you that gave birth to the life-giving God. Enlighten my blinded soul, you that gave birth to the never-ending light. O wonderful Palace of the Master, make me a house of the Divine Spirit. You that gave birth to the Physician, make well the passions of my soul. Lead me who am bestormed by life to the ways of repentance. Deliver me from the eternal flames. Do not show me to be the joy of demons because of my many sins.

Establish me anew who have been made senseless by transgressions, O Blameless One. Show me a stranger to every torment, and entreat the Master of All. Enable me to attain to the gladness of Heaven together with all the saints. O most Holy Virgin, hear the voice of your unprofitable servant. Grant me a stream of tears, O Most Pure One, to wash away the defilement of my soul.

I bring to you the groaning of my heart unceasingly; beseech the Master to listen. Accept my prayerful service and bear it to the compassionate God! You that are higher than the angels, make me to be above the gloominess of the world. O light-bearing Cloud of Heaven, establish spiritual grace in me. Although stained by sin, I raise my hands and open my lips in praise of you! Deliver me from soul-corrupting wounds, entreating Christ fervently. To Him honor and worship are due, now and ever and unto ages of ages. Amen.`,
      },
      {
        title: 'To the Guardian Angel',
        text: `O Holy Angel, keeping guard over my wretched soul and my passionate life, do not forsake me, a sinner, nor depart from me because of my incontinence. Do not give the evil enemy room to overcome me by force of this mortal body. Strengthen my weak and feeble hand, and set me on the way of salvation.

Yea, O Holy Angel of God, guardian and protector of my wretched soul and body, forgive me everything by which I have offended you all the days of my life, and even what I have done this past night; protect me during this day, and guard me from every temptation of the enemy, that I may not anger God by any sin. Pray to the Lord for me, that He may confirm me in His fear and prove me a worthy servant of His goodness. Amen.`,
      },
      {
        title: "To One's Patron Saint",
        // The blank is rendered as a styled fill-in line on the page.
        text: `Pray to God for me, O Saint __________ well-pleasing to God. I fervently entreat you who are the sure help and intercessor for my soul.`,
      },
    ],
  },

  {
    slug: 'evening',
    name: 'Evening Prayers',
    order: 3,
    description:
      'Prayers before sleep: the Mercy Troparia, and prayers to the Father, to Jesus Christ, to the Holy Spirit, and to the Theotokos.',
    prayers: [
      {
        title: 'Mercy Troparia',
        text: `Have mercy on us, O Lord, have mercy on us; for laying aside all excuse, we sinners offer to Thee, as to our Master, this supplication: Have mercy on us.

Glory to the Father, and to the Son, and to the Holy Spirit.

O Lord, have mercy on us, for in Thee have we put our trust. Do not be angry with us, nor remember our iniquities, but look down on us even now, since Thou art compassionate, and deliver us from our enemies. For Thou art our God, and we are Thy people; we are all the work of Thy hands, and we call on Thy name.

Now and ever and unto ages of ages. Amen.

O blessed Theotokos, open the doors of compassion to us whose hope is in you, that we may not perish but be delivered from adversity through you, who are the salvation of the Christian people.`,
      },
      {
        title: 'To the Father',
        text: `O Eternal God, King of every creature, Who hast enabled me to attain to this hour, forgive me the sins which I have committed this day by thought, word and deed. Cleanse my humble soul, O Lord, from every defilement of flesh and spirit.

Grant me, O Lord, to pass through the sleep of this night in peace, that I may rise from my humble bed and please Thy most Holy Name all the days of my life, vanquishing the enemies both fleshly and bodiless that contend against me. Deliver me from vain thoughts that defile me, O Lord, and from evil desires. For Thine is the Kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever and unto ages of ages. Amen.`,
      },
      {
        title: 'To Jesus Christ',
        text: `O Almighty Word of the Father, Jesus Christ, Who art Thyself perfect: Because of Thy great mercy, do not ever depart from me, Thy servant, but always abide in me. O Jesus, Good Shepherd of Thy sheep, let me not fall into the disobedience of the serpent, nor leave me to the will of Satan, for the seeds of corruption are in me.

O Lord God adorable, O Holy King Jesus, guard me while I sleep with the unfading light, Thy Holy Spirit, through Whom Thou didst sanctify Thy disciples. Grant even to me, Thy unworthy servant, O Lord, Thy salvation upon my bed. Enlighten my mind with the light of the understanding of Thy Gospel; my soul with love of Thy Cross; my heart with the purity of Thy word; my body with Thy passionless passion; preserve my thought in Thy humility, and raise me at the time proper for Thy glorification. For Thou art most glorified with Thy Father, Who is without beginning, and Thy Most Holy Spirit, unto the ages. Amen.`,
      },
      {
        title: 'To the Holy Spirit',
        text: `O Lord, Heavenly King, Comforter, the Spirit of Truth, be compassionate and have mercy on me, Thy sinful servant. Remit and forgive me, the unworthy one, all the things which I have sinned as a man, both voluntary and involuntary, in knowledge and in ignorance: from my youth, from learning of evil, and from emptiness or despair.

If I swore with Thy name, or stained it in my reasoning; or dishonored someone; or cursed someone with my anger; or saddened him; or if I have become angry over something; or lied; or slept unfittingly; or if a poor man came to me and I despised him; or if I saddened my brother; or frustrated or judged someone; or became puffed up and proud; or if while standing in prayer my mind was moved by the evil of this world; or contemplated suicide; or over ate and over drank, or laughed without reason; or thought of evil; or if I saw another's good and was bound by it in my heart; or spoke in an unseemly manner; or laughed at my brother's sin; forgive me, for my sins are countless in number.

If I have forsaken prayer, or done anything evil — I do not remember, for I have committed even more! Have mercy on me, O Master my Creator, Thine unworthy and unprofitable servant. Forgive, remit, and loose my sins, for Thou art gracious and lovest mankind; that I may rest in peace and sleep, though a prodigal, sinful and wretched, so that I may adore and praise and glorify Thy most honorable Name, together with the Father and His only-begotten Son, now and ever and unto ages of ages. Amen.`,
      },
      {
        title: 'To the Virgin Theotokos',
        text: `Rejoice! O Virgin Theotokos! Mary, full of Grace, the Lord is with you. Blessed are you among women, and blessed is the fruit of your womb, for you have borne the Savior of our souls!

O victorious leader of triumphant host! We, your servants, delivered from evil, sing our grateful thanks to you, O Theotokos! As you possess invincible might set us free from every calamity so that we may sing: Rejoice! O unwedded Bride!`,
      },
    ],
  },

  {
    slug: 'holy-communion',
    name: 'Holy Communion',
    order: 4,
    description:
      'Prayers before and after receiving the Holy Mysteries.',
    prayers: [
      {
        title: 'Before Receiving Holy Communion',
        text: `I believe, O Lord, and I confess that Thou art truly the Christ, the Son of the Living God, Who camest into the world to save sinners, of whom I am first. I believe also that this is truly Thine own pure Body, and that this is truly Thine own precious Blood. Therefore I pray Thee: have mercy upon me and forgive my transgressions both voluntary and involuntary, of word and of deed, of knowledge and of ignorance. And make me worthy to partake without condemnation of Thy most pure Mysteries, for the remission of my sins, and unto life everlasting. Amen.

Of Thy Mystical Supper, O Son of God, accept me today as a communicant; for I will not speak of Thy Mystery to Thine enemies, neither like Judas will I give Thee a kiss; but like the thief will I confess Thee: Remember me, O Lord in Thy Kingdom.

May the communion of Thy Holy Mysteries be neither to my judgment, nor to my condemnation, O Lord, but to the healing of soul and body. Amen.`,
      },
      {
        title: 'After Receiving Holy Communion',
        text: `I thank Thee, O Lord my God, for Thou hast not rejected me, a sinner, but hast made me worthy to be a partaker of Thy Holy Things. I thank Thee, for Thou hast permitted me, the unworthy, to commune of Thy most pure and Heavenly Gifts.

But, O Master Who lovest mankind, Who for our sakes didst die and rise again, and gavest us these awesome and life-creating Mysteries for the good and sanctification of our souls and bodies; let them be for the healing of our soul and body, the repelling of every adversary, the illumining of the eyes of my heart, the peace of my spiritual power, a faith unashamed, a love unfeigned, the fulfilling of wisdom, the observing of Thy commandments, the receiving of Thy divine grace, and the attaining of Thy Kingdom.

Preserved by them in Thy holiness, may I always remember Thy grace and live not for myself alone, but for Thee, our Master and Benefactor. May I pass from this life in the hope of eternal life, and so attain to the everlasting rest, where the voice of those who feast is unceasing, and the gladness of those who behold the goodness of Thy countenance is unending.

For Thou art the true desire and the ineffable joy of those who love Thee, O Christ our God, and all creation sings Thy praise forever. Amen.`,
      },
    ],
  },

  {
    slug: 'meals',
    name: 'Prayers at Meals',
    order: 5,
    description: 'Blessings said before and after eating.',
    prayers: [
      {
        title: 'Before Meals',
        text: `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.

Our Father, Who art in Heaven, hallowed be Thy name. Thy Kingdom come. Thy will be done, on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

Lord, have mercy. (3x)

O Christ our God, bless the food, drink, and fellowship of Thy servants, for Thou art holy always, now and ever and unto ages of ages. Amen.`,
      },
      {
        title: 'After Meals',
        text: `We give thanks to Thee, O Christ our God, that Thou hast satisfied us with Thy earthly blessings; deprive us not also of Thy Heavenly Kingdom. As Thou didst come to Thy disciples and didst grant them peace; so come to us and save us, O Savior.

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen.

Lord, have mercy. (3x)

Blessed is God, Who has fed and nourished us with His bountiful gifts by His grace and compassion always, now and ever and unto ages of ages. Amen.`,
      },
    ],
  },

  {
    slug: 'work',
    name: 'Prayers at Work',
    order: 6,
    description: 'Prayers said before beginning and after completing any work.',
    prayers: [
      {
        title: 'Before Any Work',
        text: `O Lord Jesus Christ, the only-begotten Son of the eternal Father, Thou hast said, "Without me you can do nothing." In faith I embrace Thy words, O Lord, and bow before Thy goodness. Help me to complete the work I am about to begin for Thine own glory: in the Name of the Father, and of the Son, and of the Holy Spirit. Amen.`,
      },
      {
        title: 'After Any Work',
        text: `Thou, O Christ, art Thyself the fulfillment of all good things! Fill my soul with joy and gladness, and save me, for Thou art all merciful.`,
      },
    ],
  },

  {
    slug: 'repentance',
    name: 'Prayers of Repentance',
    order: 7,
    description: 'Prayers of confession and contrition before God.',
    prayers: [
      {
        title: 'A Prayer of Repentance',
        text: `O Lord our God, good and merciful, I acknowledge all my sins which I have committed every day of my life, in thought, word and deed; in body and soul alike. I am heartily sorry that I have ever offended Thee, and I sincerely repent; with tears I humbly pray Thee, O Lord: of Thy mercy forgive me all my past transgressions and absolve me from them. I firmly resolve, with the help of Thy Grace, to amend my way of life and to sin no more; that I may walk in the way of the righteous and offer praise and glory to the Name of the Father, Son, and Holy Spirit. Amen.`,
      },
    ],
  },

  {
    slug: 'scripture',
    name: 'Prayers for Reading Scripture',
    order: 8,
    description:
      'Prayers said before opening the Holy Scriptures, asking God to illumine the heart and open the understanding.',
    prayers: [
      {
        title: 'Before Reading the Holy Scripture',
        text: `Illumine our hearts, O Master Who lovest mankind, with the pure light of Thy divine knowledge. Open the eyes of our mind to the understanding of Thy gospel teachings. Implant also in us the fear of Thy blessed commandments, that trampling down all carnal desires, we may enter upon a spiritual manner of living, both thinking and doing such things as are well-pleasing unto Thee.

For Thou art the illumination of our souls and bodies, O Christ our God, and unto Thee we ascribe glory, together with Thy Father, Who is from everlasting, and Thine all-holy, good, and life-creating Spirit, now and ever and unto ages of ages. Amen.`,
      },
    ],
  },

  {
    slug: 'intercessions',
    name: 'Prayers of Intercession',
    order: 9,
    description: 'Prayers for those who suffer, and for the departed.',
    prayers: [
      {
        title: 'For the Sick',
        text: `O Christ, Who alone art our Defender: Visit and heal Thy suffering servant __________, delivering him from sickness and grievous pains. Raise him up that he may sing to Thee and praise Thee without ceasing; through the prayers of the Theotokos, O Thou Who alone lovest mankind.`,
      },
      {
        title: 'For the Departed',
        text: `O God of spirits and of all flesh, Who hast trampled down death and overthrown the devil, and given life to Thy world: Do Thou, the same Lord, give rest to the souls of Thy departed servants in a place of brightness, a place of refreshment, a place of repose, where all sickness, sighing, and sorrow have fled away. Pardon every transgression which they have committed, whether by word or deed or thought. For Thou art a good God and lovest mankind, because there is no man who lives yet does not sin; for Thou only art without sin; Thy righteousness is to all eternity, and Thy word is truth.

For Thou art the Resurrection, the Life, and the Repose of Thy servants who have fallen asleep, O Christ our God, and unto Thee we ascribe glory, together with Thy Father, Who is from everlasting, and Thine all-holy, good, and life-creating Spirit, now and ever and unto ages of ages. Amen.`,
      },
    ],
  },

  {
    slug: 'hymns',
    name: 'Selected Liturgical Hymns',
    order: 10,
    description:
      'Troparia of the Resurrection and the great feasts, and the Lenten Prayer of St. Ephraim the Syrian.',
    prayers: [
      {
        title: 'Paschal Troparion',
        text: `Christ is risen from the dead, trampling down death by death, and upon those in the tombs bestowing life!`,
      },
      {
        title: 'Paschal Hypakoe',
        text: `Before the dawn, Mary and the women came and found the stone rolled away from the tomb. They heard the angelic voice: "Why do you seek among the dead as a man the One Who is Everlasting Light? Behold the clothes in the grave! Go and proclaim to the world: The Lord is risen!" He has slain death, as He is the Son of God, saving the race of men.`,
      },
      {
        title: 'Paschal Hymn to the Theotokos',
        text: `The angel cried to the Lady Full of Grace: Rejoice, O Pure Virgin! Again I say: Rejoice! Your Son is risen from His three days in the tomb! With Himself He has raised all the dead! Rejoice, all ye people!

Shine! Shine! O New Jerusalem! The glory of the Lord has shone on you! Exalt now and be glad, O Zion! Be radiant, O Pure Theotokos, in the Resurrection of your Son!`,
      },
      {
        title: 'Hymn to the Resurrection',
        text: `Having beheld the Resurrection of Christ, let us worship the holy Lord Jesus, the only Sinless One! We venerate Thy Cross, O Christ, and Thy Holy Resurrection we praise and glorify; for Thou art our God, and we know no other than Thee; we call on Thy name. Come, all you faithful, let us venerate Christ's Holy Resurrection! For, behold, through the Cross joy has come into all the world. Ever blessing the Lord, let us praise His Resurrection. By enduring the Cross for us, He destroyed death by death!`,
      },
      {
        title: 'Troparion of the Ascension',
        text: `O Christ God, Thou hast ascended in glory, granting joy to Thy disciples by the promise of the Holy Spirit. Through the blessing they were assured that Thou art the Son of God, the Redeemer of the world!`,
      },
      {
        title: 'Troparion of Pentecost',
        text: `Blessed art Thou, O Christ our God, Who hast revealed the fishermen as most wise by sending down upon them the Holy Spirit; through them Thou didst draw the world into Thy net. O Lover of Man, glory to Thee!`,
      },
      {
        title: 'Troparion of the Cross',
        text: `O Lord, save Thy people, and bless Thine inheritance. Grant victories to the Orthodox Christians over their adversaries; and by the virtue of Thy Cross, preserve Thy habitation.`,
      },
      {
        title: 'Troparion of the Nativity',
        text: `Thy Nativity, O Christ our God, has shone to the world the light of wisdom! For by it those who worshipped the stars were taught by a star to adore Thee, the Sun of Righteousness, and to know Thee, the Orient from on high! O Lord, glory to Thee!`,
      },
      {
        title: 'Troparion of the Epiphany',
        text: `When Thou, O Lord, wast baptized in the Jordan, the worship of the Trinity was made manifest! For the voice of the Father bore witness to Thee, and called Thee His beloved Son! And the Spirit, in the form of a dove, confirmed the truthfulness of His word. O Christ our God, Who hast revealed Thyself and hast enlightened the world, glory to Thee!`,
      },
      {
        title: 'Troparion of the Annunciation',
        text: `Today is the beginning of our salvation, the revelation of the eternal mystery! The Son of God becomes the Son of the Virgin, as Gabriel announces the coming of Grace. Together with him let us cry to the Theotokos: Rejoice, O Full of Grace! The Lord is with you!`,
      },
      {
        title: 'Troparion of the Transfiguration',
        text: `Thou wast transfigured on the mount, O Christ God, revealing Thy glory to the disciples as far as they could bear it. Let Thine everlasting light shine upon us sinners! Through the prayers of the Theotokos, O Giver of Light, glory to Thee!`,
      },
      {
        title: 'The Lenten Prayer of St. Ephraim the Syrian',
        text: `O Lord and Master of my life, take from me the spirit of sloth, despair, lust of power, and idle talk.

But give rather the spirit of chastity, humility, patience, and love to Thy servant.

Yea, O Lord and King, grant me to see my own sins, and not to judge my brother, for Thou art blessed unto ages of ages. Amen.`,
      },
    ],
  },

  {
    slug: 'psalms',
    name: 'Selected Psalms',
    order: 11,
    description:
      'A short selection of Psalms for personal devotion (King James Version).',
    prayers: [
      {
        title: 'Psalm 23',
        text: `The LORD is my shepherd; I shall not want. He makes me to lie down in green pastures: he leads me beside the still waters. He restores my soul: he leads me in the paths of righteousness for his name's sake.

Yes, though I walk through the valley of the shadow of death, I will fear no evil: for you are with me; your rod and your staff they comfort me. You prepare a table before me in the presence of my enemies: you anoint my head with oil; my cup runs over.

Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.`,
      },
      {
        title: 'Psalm 34',
        text: `I will bless the LORD at all times: his praise shall continually be in my mouth. My soul shall make her boast in the LORD: the humble shall hear thereof, and be glad. O magnify the LORD with me, and let us exalt his name together.

I sought the LORD, and he heard me, and delivered me from all my fears. They looked to him, and were lightened: and their faces were not ashamed. This poor man cried, and the LORD heard him, and saved him out of all his troubles. The angel of the LORD encamps round about them that fear him, and delivers them. O taste and see that the LORD is good: blessed is the man that trusts in him. O fear the LORD, you his saints: for there is no want to them that fear him. The young lions do lack, and suffer hunger: but they that seek the LORD shall not want any good thing.

Come, you children, listen to me: I will teach you the fear of the LORD. What man is he that desires life, and loves many days, that he may see good? Keep your tongue from evil, and your lips from speaking guile. Depart from evil, and do good; seek peace, and pursue it.

The eyes of the LORD are on the righteous, and his ears are open to their cry. The face of the LORD is against them that do evil, to cut off the remembrance of them from the earth. The righteous cry, and the LORD hears, and delivers them out of all their troubles. The LORD is near to them that are of a broken heart; and saves such as be of a contrite spirit. Many are the afflictions of the righteous: but the LORD delivers him out of them all. He keeps all his bones: not one of them is broken.

Evil shall slay the wicked: and they that hate the righteous shall be desolate. The LORD redeems the soul of his servants: and none of them that trust in him shall be desolate.`,
      },
      {
        title: 'Psalm 42',
        text: `As the hart pants after the water brooks, so pants my soul after you, O God. My soul thirsts for God, for the living God: when shall I come and appear before God? My tears have been my meat day and night, while they continually say to me, Where is your God?

When I remember these things, I pour out my soul in me: for I had gone with the multitude, I went with them to the house of God, with the voice of joy and praise, with a multitude that kept holy day. Why are you cast down, O my soul? and why are you disquieted in me? hope you in God: for I shall yet praise him for the help of his countenance.

O my God, my soul is cast down within me: therefore will I remember you from the land of Jordan, and of the Hermonites, from the hill Mizar. Deep calls to deep at the noise of your waterspouts: all your waves and your billows are gone over me. Yet the LORD will command his loving kindness in the day time, and in the night his song shall be with me, and my prayer to the God of my life.

I will say to God my rock, Why have you forgotten me? why go I mourning because of the oppression of the enemy? As with a sword in my bones, my enemies reproach me; while they say daily to me, Where is your God?

Why are you cast down, O my soul? and why are you disquieted within me? hope you in God: for I shall yet praise him, who is the health of my countenance, and my God.`,
      },
      {
        title: 'Psalm 67',
        text: `God be merciful to us, and bless us; and cause his face to shine on us; that your way may be known on earth, your saving health among all nations.

Let the people praise you, O God; let all the people praise you. O let the nations be glad and sing for joy: for you shall judge the people righteously, and govern the nations on earth.

Let the people praise you, O God; let all the people praise you. Then shall the earth yield her increase; and God, even our own God, shall bless us. God shall bless us; and all the ends of the earth shall fear him.`,
      },
      {
        title: 'Psalm 84',
        text: `How amiable are your tabernacles, O LORD of hosts! My soul longs, yes, even faints for the courts of the LORD: my heart and my flesh cries out for the living God. Yes, the sparrow has found an house, and the swallow a nest for herself, where she may lay her young, even your altars, O LORD of hosts, my King, and my God.

Blessed are they that dwell in your house: they will be still praising you. Blessed is the man whose strength is in you; in whose heart are the ways of them. Who passing through the valley of Baca make it a well; the rain also fills the pools. They go from strength to strength, every one of them in Zion appears before God.

O LORD God of hosts, hear my prayer: give ear, O God of Jacob. Behold, O God our shield, and look on the face of your anointed. For a day in your courts is better than a thousand. I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness.

For the LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly. O LORD of hosts, blessed is the man that trusts in you.`,
      },
      {
        title: 'Psalm 134',
        text: `Behold, bless you the LORD, all you servants of the LORD, which by night stand in the house of the LORD. Lift up your hands in the sanctuary, and bless the LORD. The LORD that made heaven and earth bless you out of Zion.`,
      },
      {
        title: 'Psalm 138',
        text: `I will praise you with my whole heart: before the gods will I sing praise to you. I will worship toward your holy temple, and praise your name for your loving kindness and for your truth: for you have magnified your word above all your name. In the day when I cried you answered me, and strengthened me with strength in my soul.

All the kings of the earth shall praise you, O LORD, when they hear the words of your mouth. Yes, they shall sing in the ways of the LORD: for great is the glory of the LORD. Though the LORD be high, yet has he respect to the lowly: but the proud he knows afar off.

Though I walk in the middle of trouble, you will revive me: you shall stretch forth your hand against the wrath of my enemies, and your right hand shall save me. The LORD will perfect that which concerns me: your mercy, O LORD, endures for ever: forsake not the works of your own hands.`,
      },
      {
        title: 'Psalm 148',
        text: `Praise you the LORD. Praise you the LORD from the heavens: praise him in the heights. Praise you him, all his angels: praise you him, all his hosts. Praise you him, sun and moon: praise him, all you stars of light. Praise him, you heavens of heavens, and you waters that be above the heavens.

Let them praise the name of the LORD: for he commanded, and they were created. He has also established them for ever and ever: he has made a decree which shall not pass.

Praise the LORD from the earth, you dragons, and all deeps: Fire, and hail; snow, and vapors; stormy wind fulfilling his word: Mountains, and all hills; fruitful trees, and all cedars: Beasts, and all cattle; creeping things, and flying fowl: Kings of the earth, and all people; princes, and all judges of the earth: Both young men, and maidens; old men, and children:

Let them praise the name of the LORD: for his name alone is excellent; his glory is above the earth and heaven. He also exalts the horn of his people, the praise of all his saints; even of the children of Israel, a people near to him. Praise you the LORD.`,
      },
    ],
  },
];

export function getCategory(slug) {
  return PRAYER_CATEGORIES.find((c) => c.slug === slug);
}

// The Jesus Prayer gets its own page: it is teaching content built around a
// single short prayer, not a list of prayers like the categories above.
export const JESUS_PRAYER = {
  prayer: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.',
  sections: [
    {
      title: 'What Is the Jesus Prayer?',
      body: `The Jesus Prayer is the most ancient and beloved prayer of the Orthodox Christian tradition. In just a few words it contains the whole of the Gospel: the acknowledgment of Jesus as Lord and Christ, the confession of His divine Sonship, the cry for mercy, and the humble recognition of our own sinfulness.

It draws directly from Scripture, from the blind man who cried "Lord, Son of David, have mercy on me" (Luke 18:38), from the publican who beat his breast and said "God, be merciful to me a sinner" (Luke 18:13), and from the ancient Christian acclamation "Lord Jesus Christ, Son of God."

The prayer has been prayed by Orthodox Christians for over fifteen centuries and remains the very heartbeat of Orthodox spiritual life.`,
    },
    {
      title: 'How to Pray It',
      body: `The Jesus Prayer is prayed with the lips, the mind, and the heart, all three working together in harmony.

1. Find a quiet place. Sit upright, breathe slowly, and become still.

2. Begin to repeat the prayer quietly with your lips: "Lord Jesus Christ, Son of God, have mercy on me, a sinner."

3. As you continue, draw the words down from your lips into your mind, so that your mind is fully attentive to each word.

4. Over time and with practice, the prayer descends further still, from the mind into the heart, so that it is prayed not with effort but with love, arising naturally from the depths of your being.

Many use a prayer rope, the komboskini or chotki, to count their repetitions, freeing the mind from counting so it may rest fully in the words of the prayer.`,
    },
    {
      title: 'Praying Without Ceasing',
      body: `Saint Paul commanded us to "pray without ceasing" (1 Thessalonians 5:17). The Jesus Prayer is the Orthodox Church's answer to this commandment.

Because the prayer is short, it can be prayed at any moment: while walking, working, cooking, driving, or waiting. The goal is not merely to say the prayer at fixed times, but to weave it into the very fabric of your breathing and your daily life until it becomes as natural as the beating of your heart.

The holy Fathers teach that when the prayer is established in the heart, it prays itself. Even during sleep, the heart continues its gentle, loving repetition of the Name of Jesus.`,
    },
    {
      title: 'How the Monks Pray It',
      body: `On the Holy Mountain of Athos and in monasteries throughout the Orthodox world, the monks dedicate their entire lives to the practice of the Jesus Prayer. This practice is called Hesychasm, from the Greek hesychia, meaning stillness or silence.

The hesychast monk rises before dawn and spends hours in the darkness of his cell, prayer rope in hand, repeating the Jesus Prayer thousands of times. He seeks not merely to say the words but to descend into the heart and find there the uncreated Light of God, the same light that shone from Christ on Mount Tabor at the Transfiguration.

Saint Gregory Palamas, the great defender of Hesychasm, taught that this light is not created or symbolic but is truly God Himself, His divine Energy, accessible to every Christian who prays with humility, repentance, and perseverance.

The great collection of writings on this prayer, the Philokalia, compiled by Saints Nikodemos of the Holy Mountain and Makarios of Corinth, gathers the wisdom of the Fathers on the Jesus Prayer across fifteen centuries. It remains the most important book of Orthodox spirituality after the Bible itself.`,
    },
    {
      title: 'The Prayer Rope',
      body: `The prayer rope, komboskini in Greek, chotki in Russian, is a knotted rope or string of wool, typically with 33, 50, or 100 knots, representing the years of Christ's earthly life.

Each knot is tied with a small cross woven into it through a complex series of loops, a practice said to have been taught to the monks by an angel, because the demons could not untangle the cross.

To use the prayer rope, hold it in your left hand and move one knot through your fingers for each repetition of the Jesus Prayer. This keeps count without requiring mental effort, freeing you to give your full attention to the words and to the Lord.

The prayer rope is not a magical object but a simple, humble tool, a companion for the journey of prayer.`,
    },
    {
      title: 'Begin Today',
      body: `You do not need to be a monk to pray the Jesus Prayer. You need only a sincere heart and a desire to draw near to God. Begin with ten repetitions in the morning and ten in the evening. Increase gradually as the prayer becomes part of you. The Lord receives every sincere cry for mercy with love.`,
    },
  ],
};
