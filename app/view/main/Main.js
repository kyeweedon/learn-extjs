/**
* This class is the main view for the application. It is specified in app.js as the
* "autoCreateViewport" property. That setting automatically applies the "viewport"
* plugin to promote that instance of this class to the body element.
*
* TODO - Replace this content of this view to suite the needs of your application.
*/
Ext.define('LearnExtJS.view.main.Main', {

   extend: 'Ext.container.Container',
   xtype: 'app-main',
   controller: 'main',
   viewModel: {

      type: 'main'

   },
   layout: {

      type: 'border'

   },
   items: [

      {region:"north",

         xtype:"component",
         cls:"appBanner",
         padding:10,
         height:40,
         html:"I learn guud"

      },
      {region: 'west',

         xtype: 'panel',
         title:"Navigation",
         bind: {

            title: '{name}'

         },
         html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
         width: 250,
         split: true,
         collapsible:true,
         collapsed:true,
         tbar: [

            {text: 'Button',

               handler: 'onClickButton'

            }

         ]

      },
      {region: 'center',

         xtype: 'tabpanel',
         items:[

            {title: 'Tab 1',

               html: '<h2>Content appropriate for the current navigation.</h2>'

            },
            {title:"Data",

               layout:"fit",
               items:[

                  {title:"Batmen",

                     xtype:"grid",
                     store:{

                        fields:[

                           "name",
                           "email",
                           "phone"

                        ],
                        data:[

                           {name:"Val Kilmer",

                              email:"val@bat.man",
                              phone:"1234-567-890"

                           },
                           {name:"George Clooney",

                              email:"george@bat.man",
                              phone:"4567-890-123"

                           },
                           {name:"Christian Bale",

                              email:"christian@bat.man",
                              phone:"7890-123-456"

                           }

                        ],
                        proxy:{

                           type:"memory"

                        }

                     },
                     columns:[

                        {text:"Name",

                           dataIndex:"name"

                        },
                        {text:"Email",

                           dataIndex:"email",
                           flex:1

                        },
                        {text:"Phone",

                           dataIndex:"phone"

                        }

                     ]

                  }

               ]

            }

         ]

      }

   ]

})
