   new Vue({
    el: '#app',
    data () {
      return {
          //composer information-- use this when adding new composers to the movement
        "composers": [ 
                         {
                 "name": "Gerald Sanders",
                 "headshot": "./assets/headshots/gerald_sanders.jpg",
                 "bio": "Often referred to as the father of New Confusion, Gerald Sanders wrote music in the style far ahead of its time. Sanders experimented with Confusion in the early 2000's after discovering Cucumber Music, a piece composed by Donald Jenni in 1974. Sanders found the proportional notation in this piece to be particularly confusing and was inspired by its genius. In the last years of his life, Sanders started the New Confusion Symposium in 2013. He chaired the Symposium until 2016 when he passed away in Cedar Rapids, Iowa.",
             },
                        {
                "name": "Barnibus Appleton",
                "headshot":"./assets/headshots/barnibus_appleton.jpg",
                "bio": "Barnibus Appleton is a Midwestern Composers who uses traditional music symbols in new and innovative ways. He wants performers to be constantly thrown off by his notation and even changes the meanings of symbols from work to work. Appleton studied with Gerald Sanders after earning a performance diploma in viola. Appleton is currently the chair for the New Confusion Symposium and has attended all of the symposiums since their inception in 2013."
            },
            {
                "name": "Hanna Hansandersdóttir",
                "headshot": "./assets/headshots/hanna_hansanderdottir.jpg",
                "bio": "Hans Hansanderson is an Icelandic composer based in Berlin who writes music based upon score alone. Hansandersdóttir's music has been described as dumbfounding, a jumbled mess, and a way to think about music. She has been commissioned by the Confused Symposium Ensemble and has been praised for her use of form over function by various music publications. She has also attended and presented at the 2015 New Confusion Symposium in Indianapolis and the 2017 New Confusion Symposium in Fayetteville, Arkansas."
                            },

            {
                "name" : "Kate Winters",
                "headshot": "./assets/headshots/kate_winters.jpg",
                "bio": "Kate Winters composes virtual reality environments meant to disconnect her performers from each other in an ensemble setting. Winters's VR scores explore the relationship between physical sound and virtual score while often including subversive electronic processing using Max/MSP."
            },
            {
                "name": "Brian Bates",
                "headshot": "./assets/headshots/brian_bates.jpg",
                "bio": "Brain Bates is a California based composer who writes music that is both complex and confusing. Bates believes by saturating a score with vague information that will cause a sense of struggle in both performers and listeners.",
            },
                        {
                "name": "Jay Green",
                "headshot": "./assets/headshots/jay_green.jpg",
                "bio": "Jay Green writes music that is in open form, but also has very specific and strict rules. Often, his scores combine long and convoluted text instruction with a modular form, often with abstract graphics. Jay Green was the guest of honor at the first New Confusion Symposium in 2013 and has attended the event ever since.",
            },
                        {
                "name": "Janice McCannon",
                "headshot": "./assets/headshots/janice_mccannon.jpg",
                "bio": "Janice McCannon uses a technique called subtractive composition to instruct her performers on what not to play. This approach is inspired by the dissonant counterpoint of composers such as Carl Ruggles, Ruth Crawford Seager, and John Cage. McCannon believes music is about what is absent to the page. McCannon attended the 2015 New Confusion Symposium in Indianapolis and is regarded as one of the most confusing composers of her generation." ,
            },
                                    {
                "name": "Anton Miller",
                "headshot": "./assets/headshots/anton_miller.jpg",
                "bio": "Anton Miller creates purely graphic scores with little to no instruction. After studying with various composers around Europe, Anton Miller returned to his home in Colorado Springs to re-invent his compositional style.  Using his recent studies as inspiration, Miller decided in order for his music to express itself fully, it must draw upon his limited visual art skills.  His scores have been lauded as an impetus for creative performance and as a wonderful source of befuddlement. Relatively new to the New Confusion Movement, Miller is a rising star who attended the 2017 New Confusion Symposium in Fayetteville, Arkansas and plans to continue going to New Confusion events."  ,
            },
            {"name": "Lukas \"Lopey\" Winkle",
             "headshot" : "./assets/headshots/lukas_winkle.jpg", 
             "bio" : "Lukas “Lopey” Winkle (b. 1996) was born in Germany but grew up primarily in the Netherlands before heading to France to study music composition in 2014. During his time in France, Lukas earned the nickname “Lopey” when he became disenchanted with the idea of traditional musical notation and clarity of notation and went through a period of pessimism and repeated failure. Upon accepting the limitations of traditional notation Lukas moved forward in his compositional growth and began creating his unique and unusual “Clip Art” Scores in 2018. His scores have been described as indistinguishable from a child’s random selection of images, both confusing and aimless. To this day Lukas has stated explicitly that he has never heard a satisfying performance of one of his works." 
            }
            
            
            

            
        ],
          //text and icons to appear in the intro segment
        "intro": [
            {
                "title":"Beyond Bars" ,
                "icon": "audiotrack",
                "info": "Gone are the days of clarity in notation. New confusion aims to maximize ambiguity in scores. This lack of clarity creates a space for innovation within each performance of an individual work while leaving the aesthetic of the score free for the composer to design.",
            },
                        {
                "title":"Innovative Forms" ,
                "icon": "account_balance",
                "info": "Without the boundaries of practicality come an abundance of structures and forms. There is no need to shepherd along an audience for the point of the new confusion is not only to flummox the performers, but also to disorient any seasoned listeners.",
            },
                                    {
                "title":"Creative Performance" ,
                "icon": "whatshot",
                "info": "Through great confusion come great opportunity for active and engaged performances. The goal of new confusion is to bog down the rehearsal process so much that no performer or ensemble will be able to master the piece thus leading to the most creative performances of any school of composition. ",
            },
                        {
                "title":"Improving Our World" ,
                "icon": "public",
                "info": "New Confusion will not only change the course of western music, but it will also positively influence our world. New confusion causes those who perform it to create unique synapses causing them to developed a unique outlook on the world. This way of thinking will encourage the next generation of thinkers to solve the worlds many impending problems..",
             
            }

        ]
      }
         
    }
  })