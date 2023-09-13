<template>
    <div>
        <dl
            class="mt-5 grid grid-cols-1 lg:space-x-4 space-y-4 lg:space-y-0 overflow-hidden  md:grid-cols-4">
            <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6 border bg-white">
                <div class="flex justify-between">
                <dt class="text-base font-normal text-gray-900">{{ item.name }}</dt>
                <div
                        :class="[item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0']">
                        <ArrowTrendingUpIcon v-if="item.changeType === 'increase'"
                            class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                        <ArrowTrendingDownIcon v-else class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                            aria-hidden="true" />
                        <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
                        {{ item.change }}
                    </div>
                </div>
                <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div class="flex flex-col items-baseline text-2xl font-semibold text-black">
                        {{ item.stat }}
                        <span class="ml-2 text-sm font-medium text-gray-500">{{ item.type }}</span>
                    </div>

                    
                </dd>
            </div>
        </dl>
    </div>
</template>
  
<script>
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from '@heroicons/vue/20/solid'

export default {
    components: { ArrowTrendingDownIcon, ArrowTrendingUpIcon },
    data() {
        return {
            stats: [
                { name: 'Total Employees', stat: '71,897', type: 'Emploee', change: '12%', changeType: 'increase' },
                { name: 'Job View', stat: '58.16%', type: 'Viewers', change: '2.02%', changeType: 'increase' },
                { name: 'Job Applied', stat: '14.57%', type: 'Applicants', change: '4.05%', changeType: 'increase' },
                { name: 'Resigned Employees', stat: '24.57%', type: 'Employee', change: '4.05%', changeType: 'decrease' },
            ]
        }
    }
}
</script>