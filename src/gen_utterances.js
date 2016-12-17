////////////////////////////////////////////////////////////////////////////////
// Copyright (c) 2015-2016 Rick Wargo. All Rights Reserved.
//
// Licensed under the MIT License (the "License"). You may not use this file
// except in compliance with the License. A copy of the License is located at
// http://opensource.org/licenses/MIT or in the "LICENSE" file accompanying
// this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
// OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.
////////////////////////////////////////////////////////////////////////////////

var utterances = require('alexa-utterances');
var slots = { GROUP: 'LITERAL', event: 'LITERAL', events: 'LITERAL' };

// SQL
// center city
// philadelphia
// b. i.
// business intelligence
// jersey
// south jersey

var dict = {
             event: [ 'event', 'user group event', 'meeting', 'user group meeting'],
             events: [ 'events', 'user group events', 'meetings', 'user group meetings']
           };
var utterance_templates = [
    'searchIntent: what {is|was} the {event} {on|} {-|date}',
    'searchIntent: what {is|was} the {-|group} {event} {on|} {-|date}',
    'searchIntent: what {is|was} {happening|occurring|} {on|} {-|date}',
    'searchIntent: what {are|were} the {events} {on|} {-|date}',
    'searchIntent: what {are|were} the {-|group} {events} {on|} {-|date}',
    'searchIntent: what {events} {are|were} {happening|occurring|} {on|} {-|date}',
    'searchIntent: what {-|group} {events} {are|were} {happening|occurring|} {on|} {-|date}',
    'searchIntent: what {event} {is|was} {happening|occurring|} {on|} {-|date}',
    'searchIntent: what {-|group} {event} {is|was} {happening|occurring|} {on|} {-|date}',
    'searchIntent: what {events} {happened|occurred} {on|} {-|date}',
    'searchIntent: what {-|group} {events} {happened|occurred} {on|} {-|date}',
    'searchIntent: {are|were} there {any|} {events} {on|} {-|date}',
    'searchIntent: {are|were} there {any|} {-|group} {events} {on|} {-|date}',
    'searchIntent: {if|} there {are|were} {any|} {events} {on|} {-|date}',
    'searchIntent: {if|} there {are|were} {any|} {-|group} {events} {on|} {-|date}',
    'searchIntent: {is|was} there {an|any} {event} {on|} {-|date}',
    'searchIntent: {is|was} there {an|any} {-|group} {event} {on|} {-|date}',
    'eventIntent:  tell me about {event} {-|number}',
    'eventIntent:  whats {event} {-|number}',
    'eventIntent:  what about {-|number}',
    'eventIntent:  number {-|number}',
    'eventIntent:  {-|number}'
];

for (var u=0; u < utterance_templates.length; u++) {
    var result = utterances(utterance_templates[u], slots, dict);
    for (var i = 0; i < result.length; i++) {
        var utterance = result[i].trim().replace(/\s+/g, ' ').replace(/(^[a-z]+):\s*/i, '$1\t');
        console.log(utterance);
    }
}
