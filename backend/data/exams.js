const exams = [
    {
        provider : 'Oracle',
        name : '1Z0-071',
        img : 'index.png',
        title: 'SQL Fundamentals',
        questions: [
            {
                num : 1,
                text : 'Which two statements are true about dropping views? (Choose two.)',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'Data selected by a view\'s defining query is deleted from its underlying tables when the view is dropped.  ',
                       correct : 0
                     },
                     {
                        answer_num : 'B',
                        text :  ' Read only views cannot be dropped. ',
                        correct : 1

                     },
                     {
                        answer_num : 'C',
                        text :  ' The creator of a view to be dropped must have the DROP ANY VIEW privilege. ',
                        correct : 1

                     },
                     {
                        answer_num : 'D',
                        text : '  CASCADE CONSTRAINTS must be specified when referential integrity constraints on other objects refer to primary or unique keys in the view to be dropped. ',
                        correct : 0
                     },
                     {
                        answer_num : 'E',
                        text : ' Views referencing a dropped view become invalid  . ',
                        correct : 0

                     }
                ]
            },
            {
                num : 2,
                text : `You need to allow user ANDREW to\:
                1. Modify the TITLE and ADDRESS columns of your CUSTOMERS table.
                2. GRANT that permission to other users.
                Which statement will do this\? `,
                answers : [
                    {
                        answer_num : 'A',
                        text :  'GRANT UPDATE (title, address) ON customers TO andrew WITH GRANT OPTION; ',
                        correct : 0
                     },
                     {
                        answer_num : 'B',
                        text :  'GRANT UPDATE (title, address) ON customers TO andrew WITH ADMIN OPTION; ',
                     },
                     {
                        answer_num : 'C',
                        text :  ' GRANT UPDATE ON customers.title, customers.address TO andrew WITH ADMIN OPTION; '
                     },
                     {
                        answer_num : 'D',
                        text : '  GRANT UPDATE (title, address) ON customers TO andrew; ',
                        correct : 0

                     },
                     {
                        answer_num : 'E',
                        text : '   GRANT UPDATE ON customers.title, customers.address TO andrew WITH GRANT OPTION;  '
                     },
                     {
                        answer_num : 'F',
                        text : '   GRANT UPDATE ON customers.title, customers.address TO andrew; '
                     }
                ]
            }, {
               num : 3,
               text : `You need to allow user ANDREW to\:
               1. Modify the TITLE and ADDRESS columns of your CUSTOMERS table.
               2. GRANT that permission to other users.
               Which statement will do this\? `,
               answers : [
                   {
                       answer_num : 'A',
                       text :  'GRANT UPDATE (title, address) ON customers TO andrew WITH GRANT OPTION; ',
                       correct : 0
                    },
                    {
                       answer_num : 'B',
                       text :  'GRANT UPDATE (title, address) ON customers TO andrew WITH ADMIN OPTION; ',
                    },
                    {
                       answer_num : 'C',
                       text :  ' GRANT UPDATE ON customers.title, customers.address TO andrew WITH ADMIN OPTION; '
                    },
                    {
                       answer_num : 'D',
                       text : '  GRANT UPDATE (title, address) ON customers TO andrew; ',
                       correct : 0

                    },
                    {
                       answer_num : 'E',
                       text : '   GRANT UPDATE ON customers.title, customers.address TO andrew WITH GRANT OPTION;  '
                    },
                    {
                       answer_num : 'F',
                       text : '   GRANT UPDATE ON customers.title, customers.address TO andrew; '
                    }
               ]
           }

        ]
    },
    {
        provider : 'Microsoft',
        name : 'DA-100',
        img : 'ms.png',
      title : 'Data analyst',
        questions: [
            {
                num : 1,
                text : 'Evaluate the following POWER BI statement',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'ORDER BY 1 ',
                       correct : 1
                     },
                     {
                        answer_num : 'B',
                        text :  'ORDER BY 2',
                        correct : 1

                     },
                     {
                        answer_num : 'C',
                        text :  'ORDER BY 3',
                        correct : 0

                     },
                     {
                        answer_num : 'D',
                        text : ' ORDER BY 4',
                        correct : 1

                     }
                ]
            },
            {
                num : 2,
                text : 'Evaluate the following SQL statement 2',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'ORDER BY 12 '
                       
                     },
                     {
                        answer_num : 'B',
                        text :  'ORDER BY 22'
                        
                     },
                     {
                        answer_num : 'C',
                        text :  'ORDER BY 32'
                     },
                     {
                        answer_num : 'D',
                        text : ' ORDER BY 42'
                     }
                ]
            }
        ]
    },
    {
        provider : 'Linux Professional Institute',
        name : 'LPIC-1',
        img : 'lpic.png',

        questions: [
            {
                num : 1,
                text : 'Evaluate the following POWER BI statement',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'ORDER BY 1 ',
                       correct : 1
                     },
                     {
                        answer_num : 'B',
                        text :  'ORDER BY 2',
                        correct : 1

                     },
                     {
                        answer_num : 'C',
                        text :  'ORDER BY 3',
                        correct : 0

                     },
                     {
                        answer_num : 'D',
                        text : ' ORDER BY 4',
                        correct : 1

                     }
                ]
            },
            {
                num : 2,
                text : 'Evaluate the following SQL statement 2',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'ORDER BY 12 '
                       
                     },
                     {
                        answer_num : 'B',
                        text :  'ORDER BY 22'
                        
                     },
                     {
                        answer_num : 'C',
                        text :  'ORDER BY 32'
                     },
                     {
                        answer_num : 'D',
                        text : ' ORDER BY 42'
                     }
                ]
            }
        ]
    },
    {
        provider : 'Cisco',
        name : 'CCNA-1',
        img : 'cisco.png',
        title: 'Networking fundamentals',
        questions: [
            {
                num : 1,
                text : 'Evaluate the following POWER BI statement',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'ORDER BY 1 ',
                       correct : 1
                     },
                     {
                        answer_num : 'B',
                        text :  'ORDER BY 2',
                        correct : 1

                     },
                     {
                        answer_num : 'C',
                        text :  'ORDER BY 3',
                        correct : 0

                     },
                     {
                        answer_num : 'D',
                        text : ' ORDER BY 4',
                        correct : 1

                     }
                ]
            },
            {
                num : 2,
                text : 'Evaluate the following SQL statement 2',
                answers : [
                    {
                        answer_num : 'A',
                        text :  'ORDER BY 12 '
                       
                     },
                     {
                        answer_num : 'B',
                        text :  'ORDER BY 22'
                        
                     },
                     {
                        answer_num : 'C',
                        text :  'ORDER BY 32'
                     },
                     {
                        answer_num : 'D',
                        text : ' ORDER BY 42'
                     }
                ]
            }
        ]
    },
    {
      provider : 'Amazon',
      name : 'Aws Architect',
      img : 'aws.png',
      nb_questions : 100,
      title: 'Aws Architect',
      questions: [
          {
              num : 1,
              text : 'Evaluate the following POWER BI statement',
              answers : [
                  {
                      answer_num : 'A',
                      text :  'ORDER BY 1 ',
                     correct : 1
                   },
                   {
                      answer_num : 'B',
                      text :  'ORDER BY 2',
                      correct : 1

                   },
                   {
                      answer_num : 'C',
                      text :  'ORDER BY 3',
                      correct : 0

                   },
                   {
                      answer_num : 'D',
                      text : ' ORDER BY 4',
                      correct : 1

                   }
              ]
          },
          {
              num : 2,
              text : 'Evaluate the following SQL statement 2',
              answers : [
                  {
                      answer_num : 'A',
                      text :  'ORDER BY 12 '
                     
                   },
                   {
                      answer_num : 'B',
                      text :  'ORDER BY 22'
                      
                   },
                   {
                      answer_num : 'C',
                      text :  'ORDER BY 32'
                   },
                   {
                      answer_num : 'D',
                      text : ' ORDER BY 42'
                   }
              ]
          }
      ]
  },
  {
   provider : 'Google',
   name : 'Google Cloud Certified',
   img : 'google.png',
   title: 'Google Cloud Architect',
   questions: [
       {
           num : 1,
           text : 'Evaluate the following POWER BI statement',
           answers : [
               {
                   answer_num : 'A',
                   text :  'ORDER BY 1 ',
                  correct : 1
                },
                {
                   answer_num : 'B',
                   text :  'ORDER BY 2',
                   correct : 1

                },
                {
                   answer_num : 'C',
                   text :  'ORDER BY 3',
                   correct : 0

                },
                {
                   answer_num : 'D',
                   text : ' ORDER BY 4',
                   correct : 1

                }
           ]
       },
       {
           num : 2,
           text : 'Evaluate the following SQL statement 2',
           answers : [
               {
                   answer_num : 'A',
                   text :  'ORDER BY 12 '
                  
                },
                {
                   answer_num : 'B',
                   text :  'ORDER BY 22'
                   
                },
                {
                   answer_num : 'C',
                   text :  'ORDER BY 32'
                },
                {
                   answer_num : 'D',
                   text : ' ORDER BY 42'
                }
           ]
       }
   ]
}
]

export default exams;