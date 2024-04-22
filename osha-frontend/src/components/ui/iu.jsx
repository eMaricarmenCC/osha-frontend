function progressBar() {
  return (
    <div class="relative p-4 mt-24 max-w-sm mx-auto">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            In Progress
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-teal-600">
            70%
          </span>
        </div>
      </div>
      <div class="flex rounded-full h-2 bg-gray-200">
        <div style="width:70%" class="rounded-full bg-teal-500"></div>
      </div>
    </div>
  )
}