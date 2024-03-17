import React from 'react'
import Header from './components/Header'
import Movies from './components/Movies'

function App() {

  const movies = [
    {
      id: 'm1',
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSaAgEKGAhM-PkFO0PbwPvuttF3X7d0BlqMHAm5tTKQtPqIheT',
      title: '3 Idiots',
      description: 'In college, Farhan and Raju form a great bond with Rancho due to his positive and refreshing outlook to life. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.',
    },
    {
      id: 'm2',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiWdN181yXmxfE_D15V044jhgr07gE_aikvbI97qBc6XkSKLUo',
      title: 'Lagaan',
      description: `The year is 1893 and India is under British occupation. In a small village, the tyrannical Captain Russell (Paul Blackthorne) has imposed an unprecedented land tax on its citizens. Outraged, Bhuvan (Aamir Khan), a rebellious farmer, rallies the villagers to publicly oppose the tax. Russell offers a novel way to settle the dispute: he challenges Bhuvan and his men to a game of cricket, a sport completely foreign to India. If Bhuvan and his men can defeat Russell's team, the tax will be repealed.`,
    },
    {
      id: 'm3',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSStzLSadT0RtpomzNB91w6e0LrFlM1ITg2HZDHZIV-xge_R9i6',
      title: 'Bhaag Milkha Bhaag',
      description: `This is a true story of 'the Flying Sikh' - world champion runner and Olympian Milkha Singh who overcame the massacre of his family and the civil war during the India-Pakistan partition.`,
    },
    {
      id: 'm4',
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbnazD1FkarVElKkQfoi3-Bo0M7XcMxEvoSlrkWU0k45mSraP9',
      title: '12th Fail',
      description: `IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC.`,
    }
  ]

  return (
    <div>
      <Header/>
      <Movies movies = {movies}/>
    </div>
  )
}

export default App
