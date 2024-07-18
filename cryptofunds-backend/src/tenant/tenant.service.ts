import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Tenant } from './tenant.entity'


@Injectable()
export class TenantService {
    constructor(
        @InjectRepository(Tenant)
        private tenantRepository: Repository<Tenant>,
    ) {}

    find(email: string): Promise<Tenant> {
        return this.tenantRepository.findOne({ where: { email }})
    }

    create(email: string, session_id: string): Promise<Tenant> {
        const tenant = new Tenant()
        tenant.email = email
        tenant.session_id = session_id
        return this.tenantRepository.save(tenant)
    }
}
