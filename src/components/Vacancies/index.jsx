import React from 'react'
import { Link } from 'react-router-dom'

const Vacancy = () => {
	return (
		<div id='vacansies'>
			<div className='vacansies'>
				<div className='btn'>
					<button>Дабавить вакасию</button>
				</div>
			</div>
			<div className='bloc'>
				<Link to={'/'}>
					<div className='text-nav'>
						<h4>
							Компония{' '}
							<span>
								OcOO "Грин Телеком <br /> Сервис" (O!Dengi)
							</span>
						</h4>
						<h4>
							Должность <span>Дата инженер</span>
						</h4>
						<h4>
							Оклад <span>От 90000 KGS в месяц</span>
						</h4>
						<h4>
							Тип <span>Офис / Бишкек</span>
						</h4>
					</div>
				</Link>
				<div className='image'>
					<img
						data-v-7ad410c8=''
						src='https://static.qiwi.com/img/providers/logoBig/36356_l.png'
						alt='img'
					/>
				</div>
			</div>

			<div className='bloc2'>
				<Link to={'/'}>
					<div className='text-nav2'>
						<h4>
							Компония{' '}
							<span>
								OcOO Mega
								<br /> Сервис" (MegaPay)
							</span>
						</h4>
						<h4>
							Должность <span>Менеджер</span>
						</h4>
						<h4>
							Оклад <span>От 50000 KGS в месяц</span>
						</h4>
						<h4>
							Тип <span>Офис / Бишкек</span>
						</h4>
					</div>
				</Link>
				<div className='image2'>
					<img
						data-v-7ad410c8=''
						src='https://www.megacom.kg/uploads/ckeditor/pictures/3631/content_ru_MEGA-New-1200x900.png'
						alt='img'
					/>
				</div>
			</div>
		</div>
	)
}

export default Vacancy
