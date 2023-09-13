<template>
    <div class="px-4 sm:px-6 lg:px-8 border w-full bg-white">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold mt-4 leading-6 text-gray-900">Employee Status</h1>
                
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                
            </div>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-400 sm:pl-0">Employee Name</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-400">Department
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-400">Age</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-400">Disipline</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-400">Status</th>                               
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="person in people" :key="person.email">
                                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                    <div class="flex items-center">
                                        <div class="h-11 w-11 flex-shrink-0">
                                            <img class="h-11 w-11 rounded-full" :src="person.image" alt="" />
                                        </div>
                                        <div class="ml-4">
                                            <div class="font-medium text-gray-900 font-bold">{{ person.name }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-900 font-bold">
                                    <div class="mt-1 text-gray-900 font-bold">{{ person.department }}</div>
                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-900 font-bold">{{ person.age }}</td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-900 font-bold"><span class="text-green-600">+</span>{{ person.disipline }}</td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-900 font-bold">
                                    <span
                                        class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset" :class="`${person.status === 'Permanent' ? 'text-green-700 bg-green-50 ring-green-600/20' : 'text-black bg-gray-50 ring-gray-600/20'}`">{{ person.status }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {

    data() {
        return {
            people: [
                {
                    name: 'Lindsay Walton',
                    title: 'Front-end Developer',
                    department: 'Optimization',
                    status: 'Permanent',
                    age: '22',
                    disipline: '100%',
                    image:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }, {
                    name: 'Lindsay Walton',
                    title: 'Front-end Developer',
                    department: 'Optimization',
                    status: 'Contract',
                    age: '35',
                    disipline: '95%',
                    image:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }, {
                    name: 'Lindsay Walton',
                    title: 'Front-end Developer',
                    department: 'Optimization',
                    status: 'Permanent',
                    age: '26',
                    disipline: '89%',
                    image:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                },
                // More people...
            ]
        }
    }
}
</script>