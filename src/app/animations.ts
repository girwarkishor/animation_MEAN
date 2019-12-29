import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ transform: 'translateY(20%)', opacity: 0 }), animate('0.2s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ transform: 'translateY(0%)' }), animate('0.2s ease-in-out', style({transform: 'translateY(-20%)', opacity: 0}))],
      { optional: true }
    )
  ])
]);
// export const routeAnimations: AnimationTriggerMetadata =
//   trigger('routeAnimations', [
//     state('void', style({position: 'absolute', width: '100%', height: '100%', opacity: 0}) ),
//     state('*', style({position: 'absolute', width: '100%', height: '100%', opacity: 1}) ),

//     transition(':enter', [
//       style({transform: 'translateY(20%)', opacity: 0}),
//       animate('0.8s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))
//     ]),
//     transition(':leave', [
//       style({transform: 'translateY(0%)'}),
//       animate('0.8s ease-in-out', style({transform: 'translateY(-20%)', opacity: 0}))
//     ])
//   ]);
