/**
* Copyright 2019 Haiku Systems Inc.
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
* http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import {prefab} from '@diez/engine';

/**
 * Defining the interface of your component's data enables you to instantiate your own
 * reusable components.
 */
interface MarginData {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

/**
 * Here we create a custom reusable component for describing layout margins.
 */
export class Margin extends prefab<MarginData>() {
  defaults = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  /**
   * Let's add in a helper method for defining margins (inspired by CSS shorthand).
   */
  static simple (vertical: number, maybeHorizontal?: number) {
    const horizontal = (maybeHorizontal === undefined) ? vertical : maybeHorizontal;

    return new Margin({
      top: vertical,
      bottom: vertical,
      left: horizontal,
      right: horizontal,
    });
  }
}
