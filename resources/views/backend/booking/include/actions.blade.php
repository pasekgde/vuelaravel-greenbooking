
    <div class="btn-group" role="group" aria-label="@lang('labels.backend.access.users.user_actions')">
        <a href="#" data-toggle="tooltip" data-placement="top" title="@lang('buttons.general.crud.view')" class="btn btn-info">
            <i class="fas fa-eye"></i>
        </a>

        <a href="#" @click="selectBooking(book)" data-toggle="modal" data-target="#editModal"data-placement="top" title="@lang('buttons.general.crud.edit')" class="btn btn-primary">
            <i class="fas fa-edit"></i>
        </a>

        <a href="#" @click="selectBooking(book); deleteData(book)" title="@lang('buttons.general.crud.edit')" class="btn btn-danger">
            <i class="fas fa-trash"></i>
        </a>
    </div>

