import { Observable, observable } from 'rxjs'

const rcnd = [
  {
    title: 'Episode 1',
    subtitle: 'Lets Go',
    rating: 1000,
    artURL: 'trackartURL',
    trackId: '1a23fa6'
  },
  {
    title: 'Episode 2',
    subtitle: 'Lets Go AGAIN',
    rating: 1500,
    artURL: 'trackartURL',
    trackId: '2b350b7'
  },
  {
    title: 'Episode 3',
    subtitle: 'Lets Go AGAIN',
    rating: 1500,
    artURL: 'trackartURL',
    trackId: '3c461c8'
  },
  {
    title: 'Episode 4',
    subtitle: 'Lets Go AGAIN',
    rating: 1500,
    artURL: 'trackartURL',
    trackId: '4d572d9'
  }
]

export const RecommendationService = {
  get: (context) => {
    return new Observable(
      observer => {
        let i = 0
        setInterval(function(){
          observer.next(rcnd[i])
          if(i===3) i %= 3
          else i++
        },100)

        return {
          unsubscribe() {
            // Cancel ongoing XHRs
          }
        }
      })
  },

  search: (trackId:string) => {
    return new Observable(
      observer => {
        setTimeout(function(){
          let result = rcnd.filter(track => track.trackId.startsWith(trackId))  
          observer.next(result)
        }, 2000)

        return {
          unsubscribe() {
            // Cancel XHRs
          }
        }
      }
    )
  }
}