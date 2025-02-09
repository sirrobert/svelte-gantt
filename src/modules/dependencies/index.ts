import _svelteGanttDependencies from './GanttDependencies.svelte';
import type { ComponentCreator, Component } from '../../core/svelte';
import type { DependencyModel } from './dependency';

var SvelteGanttDependencies = _svelteGanttDependencies as unknown as ComponentCreator<Component>;

export { SvelteGanttDependencies };
export type { DependencyModel };