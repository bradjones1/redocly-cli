import recommended from './recommended';
import recommendedStrict from './recommended-strict';
import all from './all';
import minimal from './minimal';
import { rules as oas3Rules } from '../rules/oas3';
import { rules as oas2Rules } from '../rules/oas2';
import { rules as async2Rules } from '../rules/async2';
import { rules as arazzoRules } from '../rules/arazzo';
import { preprocessors as oas3Preprocessors } from '../rules/oas3';
import { preprocessors as oas2Preprocessors } from '../rules/oas2';
import { preprocessors as async2Preprocessors } from '../rules/async2';
import { preprocessors as arazzoPreprocessors } from '../rules/arazzo';
import { decorators as oas3Decorators } from '../decorators/oas3';
import { decorators as oas2Decorators } from '../decorators/oas2';
import { decorators as async2Decorators } from '../decorators/async2';
import { decorators as arazzoDecorators } from '../decorators/arazzo';

import type { CustomRulesConfig, StyleguideRawConfig, Plugin } from './types';

export const builtInConfigs: Record<string, StyleguideRawConfig> = {
  recommended,
  'recommended-strict': recommendedStrict,
  minimal,
  all,
  'redocly-registry': {
    decorators: { 'registry-dependencies': 'on' },
  },
};

export const defaultPlugin: Plugin = {
  id: '', // default plugin doesn't have id
  rules: {
    oas3: oas3Rules,
    oas2: oas2Rules,
    async2: async2Rules,
    arazzo: arazzoRules,
  } as CustomRulesConfig,
  preprocessors: {
    oas3: oas3Preprocessors,
    oas2: oas2Preprocessors,
    async2: async2Preprocessors,
    arazzo: arazzoPreprocessors,
  },
  decorators: {
    oas3: oas3Decorators,
    oas2: oas2Decorators,
    async2: async2Decorators,
    arazzo: arazzoDecorators,
  },
  configs: builtInConfigs,
};
