export const aptitudeTests = [
  {
    title: 'Quantitative Aptitude Basics',
    category: 'Quantitative',
    durationMinutes: 25,
    questions: [
      { question: 'If 12 workers finish a task in 10 days, how many days will 15 workers take?', options: ['6', '8', '10', '12'], correctAnswer: 1, explanation: 'Work is constant: 12 x 10 = 120 worker-days. 120 / 15 = 8.' },
      { question: 'A number increased by 20% becomes 240. What is the original number?', options: ['180', '190', '200', '210'], correctAnswer: 2, explanation: 'Original x 1.2 = 240, so original = 200.' },
      { question: 'What is the average of 8, 12, 16, 20?', options: ['12', '14', '16', '18'], correctAnswer: 1, explanation: 'Sum is 56. Average is 56 / 4 = 14.' },
      { question: 'A shopkeeper buys an item for 500 and sells it for 625. What is the profit percentage?', options: ['20%', '22%', '25%', '30%'], correctAnswer: 2, explanation: 'Profit is 125. Profit percentage = 125 / 500 x 100 = 25%.' },
      { question: 'An article is sold at a loss of 12% for 440. What was its cost price?', options: ['480', '500', '520', '550'], correctAnswer: 1, explanation: 'Selling price is 88% of cost price. Cost price = 440 / 0.88 = 500.' },
      { question: 'If 8 men can complete a work in 15 days, how many men are required to complete it in 10 days?', options: ['10', '12', '14', '16'], correctAnswer: 1, explanation: 'Total work = 8 x 15 = 120 man-days. 120 / 10 = 12 men.' },
      { question: 'A can do a job in 12 days and B can do it in 18 days. How long will they take together?', options: ['6.2 days', '7.2 days', '8 days', '9 days'], correctAnswer: 1, explanation: 'Combined rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.' },
      { question: 'What is 35% of 640?', options: ['204', '214', '224', '234'], correctAnswer: 2, explanation: '35% of 640 = 0.35 x 640 = 224.' },
      { question: 'A value decreases from 800 to 680. What is the percentage decrease?', options: ['12%', '15%', '18%', '20%'], correctAnswer: 1, explanation: 'Decrease is 120. Percentage decrease = 120 / 800 x 100 = 15%.' },
      { question: 'The ratio of boys to girls in a class is 3:2. If there are 45 boys, how many girls are there?', options: ['25', '30', '35', '40'], correctAnswer: 1, explanation: '3 parts = 45, so 1 part = 15. Girls = 2 parts = 30.' },
      { question: 'Divide 720 in the ratio 5:7. What is the larger share?', options: ['300', '360', '420', '480'], correctAnswer: 2, explanation: 'Total parts = 12. Larger share = 720 x 7 / 12 = 420.' },
      { question: 'Find the simple interest on 4000 at 8% per annum for 3 years.', options: ['860', '920', '960', '1040'], correctAnswer: 2, explanation: 'SI = PRT / 100 = 4000 x 8 x 3 / 100 = 960.' },
      { question: 'What is the compound interest on 10000 at 10% per annum for 2 years, compounded annually?', options: ['2000', '2100', '2200', '2500'], correctAnswer: 1, explanation: 'Amount = 10000 x 1.1 x 1.1 = 12100. CI = 2100.' },
      { question: 'A train travels 180 km in 3 hours. What is its speed?', options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'], correctAnswer: 2, explanation: 'Speed = distance / time = 180 / 3 = 60 km/h.' },
      { question: 'A car running at 72 km/h covers how many meters in 10 seconds?', options: ['100 m', '150 m', '200 m', '250 m'], correctAnswer: 2, explanation: '72 km/h = 20 m/s. Distance in 10 seconds = 200 m.' },
      { question: 'A boat goes 30 km downstream in 2 hours. If stream speed is 3 km/h, what is the boat speed in still water?', options: ['10 km/h', '12 km/h', '15 km/h', '18 km/h'], correctAnswer: 1, explanation: 'Downstream speed = 30 / 2 = 15 km/h. Still water speed = 15 - 3 = 12 km/h.' }
    ]
  },
  {
    title: 'Logical Reasoning Starter',
    category: 'Reasoning',
    durationMinutes: 22,
    questions: [
      { question: 'Find the next term: 2, 6, 12, 20, 30, ?', options: ['36', '40', '42', '44'], correctAnswer: 2, explanation: 'Differences are 4, 6, 8, 10, so next difference is 12.' },
      { question: 'Book is to Reading as Fork is to?', options: ['Drawing', 'Eating', 'Writing', 'Singing'], correctAnswer: 1, explanation: 'A fork is used for eating.' },
      { question: 'Which one is odd: Apple, Mango, Carrot, Banana?', options: ['Apple', 'Mango', 'Carrot', 'Banana'], correctAnswer: 2, explanation: 'Carrot is a vegetable; the others are fruits.' },
      { question: 'Statements: All roses are flowers. Some flowers are red. Conclusion: Some roses are red. Is the conclusion valid?', options: ['Definitely true', 'Definitely false', 'Cannot be determined', 'None of these'], correctAnswer: 2, explanation: 'Some flowers are red does not guarantee those flowers are roses.' },
      { question: 'Statements: All engineers are graduates. Ravi is an engineer. What follows?', options: ['Ravi is a graduate', 'Ravi is not a graduate', 'All graduates are engineers', 'No conclusion'], correctAnswer: 0, explanation: 'Since all engineers are graduates and Ravi is an engineer, Ravi is a graduate.' },
      { question: 'Pointing to a woman, Aman says, "She is the daughter of my mother\'s only son." Who is the woman to Aman?', options: ['Sister', 'Daughter', 'Mother', 'Aunt'], correctAnswer: 1, explanation: 'Aman\'s mother\'s only son is Aman, so the woman is Aman\'s daughter.' },
      { question: 'A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?', options: ['Father', 'Uncle', 'Brother', 'Grandfather'], correctAnswer: 1, explanation: 'A is C\'s brother, and C is D\'s father, so A is D\'s uncle.' },
      { question: 'Find the next number: 3, 9, 27, 81, ?', options: ['162', '216', '243', '324'], correctAnswer: 2, explanation: 'Each term is multiplied by 3. 81 x 3 = 243.' },
      { question: 'Find the missing term: 5, 11, 23, 47, ?', options: ['89', '93', '95', '97'], correctAnswer: 2, explanation: 'Each term is previous x 2 + 1. 47 x 2 + 1 = 95.' },
      { question: 'If CAT is coded as DBU, how is DOG coded?', options: ['EPH', 'EPI', 'FQH', 'CNG'], correctAnswer: 0, explanation: 'Each letter is shifted forward by one: D->E, O->P, G->H.' },
      { question: 'If DELHI is coded as CDKGH, how is MUMBAI coded?', options: ['LTL AZH', 'LTLAZH', 'NVNCBJ', 'LTLABH'], correctAnswer: 1, explanation: 'Each letter is shifted back by one: MUMBAI becomes LTLAZH.' },
      { question: 'Ravi walks 5 km north, turns right and walks 3 km, then turns right and walks 5 km. How far is he from the starting point?', options: ['2 km', '3 km', '5 km', '8 km'], correctAnswer: 1, explanation: 'He returns to the original north-south level and is 3 km east of the start.' },
      { question: 'A person faces east, turns 90 degrees clockwise, then 180 degrees anticlockwise. Which direction is he facing?', options: ['North', 'South', 'East', 'West'], correctAnswer: 0, explanation: 'East to south after clockwise turn, then south to north after 180 degrees anticlockwise.' },
      { question: 'Find the next term: AZ, BY, CX, DW, ?', options: ['EV', 'FU', 'EX', 'DV'], correctAnswer: 0, explanation: 'First letters move forward and second letters move backward: E and V.' },
      { question: 'If Monday is coded as 2 and Tuesday as 3, what is Saturday coded as?', options: ['5', '6', '7', '8'], correctAnswer: 2, explanation: 'Using weekday positions with Sunday as 1, Saturday is 7.' }
    ]
  }
];